import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FaMicrophone,
  FaTimes,
  FaCopy,
  FaHistory,
  FaStop,
  FaPlay,
  FaPause,
  FaWaveSquare,
  FaEraser,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa";
import {
  STT_SESSION_START_URL,
  sttWebspeechUrl,
} from "../../../platform/config/api.config";

const DEFAULT_HISTORY_KEY = "audiology_stt_history";
const SpeechRecognition =
  typeof window !== "undefined"
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

function formatTimer(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

const STT_ROOT_SELECTOR = "[data-stt-assistant]";

function isInsideSttAssistant(el) {
  return !!el?.closest?.(STT_ROOT_SELECTOR);
}

function isFormField(el) {
  if (!el || el.readOnly || el.disabled || isInsideSttAssistant(el)) return false;

  const tag = el.tagName;
  if (tag === "TEXTAREA") return true;

  if (tag === "INPUT") {
    const type = (el.type || "text").toLowerCase();
    return ["text", "search", "email", "tel", "url", "number", ""].includes(type);
  }

  return false;
}

function insertIntoField(el, text) {
  if (!isFormField(el) || !text) return false;

  const start = el.selectionStart ?? el.value.length;
  const end = el.selectionEnd ?? el.value.length;
  const newValue = `${el.value.slice(0, start)}${text}${el.value.slice(end)}`;

  const proto =
    el.tagName === "TEXTAREA"
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
  setter?.call(el, newValue);

  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
  el.focus();
  const pos = start + text.length;
  el.setSelectionRange?.(pos, pos);
  return true;
}

function resolveInsertTarget(lastFieldRef) {
  const active = document.activeElement;
  if (isFormField(active)) return active;
  const remembered = lastFieldRef.current;
  if (remembered?.isConnected && isFormField(remembered)) return remembered;
  return null;
}

function getFieldLabel(el) {
  if (!el) return "selected field";

  const id = el.id;
  if (id) {
    const linked = document.querySelector(`label[for="${CSS.escape(id)}"]`);
    if (linked?.textContent?.trim()) {
      return linked.textContent.trim().slice(0, 80);
    }
  }

  const labelled = el.closest("label");
  if (labelled?.textContent?.trim()) {
    return labelled.textContent.trim().slice(0, 80);
  }

  const row = el.closest("[data-field-label], .fb-field, .form-group");
  const rowLabel = row?.querySelector("label, .fb-label, [class*='label']");
  if (rowLabel?.textContent?.trim()) {
    return rowLabel.textContent.trim().slice(0, 80);
  }

  return (
    el.getAttribute("aria-label") ||
    el.getAttribute("placeholder") ||
    el.name ||
    "selected field"
  );
}

function isVisibleField(el) {
  const style = window.getComputedStyle(el);
  if (style.display === "none" || style.visibility === "hidden") return false;
  if (el.type === "hidden") return false;
  if (el.offsetParent === null && style.position !== "fixed") return false;
  return true;
}

function getAllFormFields() {
  return Array.from(document.querySelectorAll("textarea, input")).filter(
    (el) => isFormField(el) && isVisibleField(el),
  );
}

function findNextField(current) {
  const fields = getAllFormFields();
  if (!fields.length) return null;
  if (!current) return fields[0];

  const idx = fields.indexOf(current);
  if (idx === -1) return fields[0];
  return fields[(idx + 1) % fields.length];
}

function loadHistory(historyKey) {
  try {
    const raw = localStorage.getItem(historyKey);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistoryEntry(historyKey, text) {
  if (!text?.trim()) return;
  const entry = { text: text.trim(), at: new Date().toISOString() };
  const next = [entry, ...loadHistory(historyKey).filter((h) => h.text !== entry.text)].slice(
    0,
    20,
  );
  localStorage.setItem(historyKey, JSON.stringify(next));
  return next;
}

export default function AudiologySttFloatingMic({
  onToast,
  historyKey = DEFAULT_HISTORY_KEY,
  useTransportControls = false,
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [listening, setListening] = useState(false);
  const [recordingState, setRecordingState] = useState("idle"); // idle | recording | paused | stopped
  const [transcript, setTranscript] = useState("");
  const [interimText, setInterimText] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [history, setHistory] = useState(() => loadHistory(historyKey));
  const [showHistory, setShowHistory] = useState(false);

  const recognitionRef = useRef(null);
  const sessionIdRef = useRef(null);
  const timerRef = useRef(null);
  const transcriptRef = useRef("");
  const interimRef = useRef("");
  const lastFinalSyncRef = useRef("");
  const lastFieldRef = useRef(null);
  const pausingRef = useRef(false);
  const recordingStateRef = useRef("idle");
  const [targetHint, setTargetHint] = useState("");

  sessionIdRef.current = sessionId;
  recordingStateRef.current = recordingState;

  const rememberField = useCallback((el) => {
    if (!isFormField(el)) return;
    lastFieldRef.current = el;
    setTargetHint(getFieldLabel(el));
  }, []);

  useEffect(() => {
    const onFocusIn = (event) => rememberField(event.target);
    const onPointerDown = (event) => rememberField(event.target);

    document.addEventListener("focusin", onFocusIn, true);
    document.addEventListener("mousedown", onPointerDown, true);
    document.addEventListener("touchstart", onPointerDown, true);

    return () => {
      document.removeEventListener("focusin", onFocusIn, true);
      document.removeEventListener("mousedown", onPointerDown, true);
      document.removeEventListener("touchstart", onPointerDown, true);
    };
  }, [rememberField]);

  const flushTranscriptToServer = useCallback(async () => {
    const id = sessionIdRef.current;
    const full = transcriptRef.current.trim();
    if (!id || !full || full === lastFinalSyncRef.current) return;

    lastFinalSyncRef.current = full;

    try {
      await fetch(sttWebspeechUrl(id), {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transcript: full,
          language: "en-US",
          is_final: true,
          segments: [{ transcript: full, is_final: true }],
        }),
      });
    } catch {
      // Non-blocking — local transcript still shown in popup
    }
  }, []);

  const stopListening = useCallback(({ pause = false } = {}) => {
    if (pause) pausingRef.current = true;
    recognitionRef.current?.stop();
    if (!pause) {
      recognitionRef.current = null;
    }
    setListening(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startListening = useCallback(({ resume = false } = {}) => {
    if (!SpeechRecognition) {
      onToast?.({
        message: "Speech recognition is not supported in this browser.",
        variant: "error",
      });
      return;
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
      setRecordingState("recording");
      if (!resume && !useTransportControls) {
        setElapsed(0);
      }
      if (!timerRef.current) {
        timerRef.current = setInterval(() => {
          setElapsed((t) => t + 1);
        }, 1000);
      }
    };

    recognition.onresult = (event) => {
      let interim = "";

      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const result = event.results[i];
        const text = result[0]?.transcript || "";
        if (result.isFinal) {
          transcriptRef.current += text;
          setTranscript(transcriptRef.current);
        } else {
          interim += text;
        }
      }

      interimRef.current = interim;
      setInterimText(interim);
    };

    recognition.onerror = (event) => {
      if (event.error !== "aborted" && event.error !== "no-speech") {
        onToast?.({
          message: `Speech capture error: ${event.error}`,
          variant: "error",
        });
      }
      if (!pausingRef.current) {
        setRecordingState((prev) => (prev === "recording" ? "stopped" : prev));
      }
      stopListening();
    };

    recognition.onend = () => {
      recognitionRef.current = null;
      setListening(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      if (pausingRef.current) {
        pausingRef.current = false;
        setRecordingState("paused");
        return;
      }

      if (recordingStateRef.current === "recording" && !useTransportControls) {
        setRecordingState("stopped");
      } else if (recordingStateRef.current === "recording" && useTransportControls) {
        setRecordingState("stopped");
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [onToast, stopListening, useTransportControls]);

  const startSession = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(STT_SESSION_START_URL, {
        method: "POST",
        headers: { accept: "application/json" },
      });

      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok) {
        throw new Error(
          payload?.message || `Request failed (${response.status})`,
        );
      }

      const id = payload?.data?.session_id;
      if (!id) throw new Error("No session id returned from STT service");

      setSessionId(id);
      setOpen(true);
      setTranscript("");
      setInterimText("");
      setElapsed(0);
      transcriptRef.current = "";
      interimRef.current = "";
      lastFinalSyncRef.current = "";
      setRecordingState("idle");
      if (!useTransportControls) {
        startListening();
      }
    } catch (e) {
      const isNetworkError =
        e?.name === "TypeError" &&
        (e?.message === "Failed to fetch" || e?.message?.includes("fetch"));

      onToast?.({
        message: isNetworkError
          ? "Could not reach speech-to-text service. Restart dev server if using proxy."
          : e?.message || "Failed to start speech-to-text session",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }, [onToast, startListening, useTransportControls]);

  const handlePlay = useCallback(() => {
    if (listening) return;
    const resume =
      recordingState === "paused" ||
      recordingState === "stopped" ||
      transcriptRef.current.length > 0 ||
      elapsed > 0;
    startListening({ resume });
  }, [listening, recordingState, elapsed, startListening]);

  const handlePause = useCallback(() => {
    if (!listening) return;
    if (interimRef.current.trim()) {
      transcriptRef.current = `${transcriptRef.current}${interimRef.current}`.trim();
      setTranscript(transcriptRef.current);
      interimRef.current = "";
      setInterimText("");
    }
    stopListening({ pause: true });
  }, [listening, stopListening]);

  const handleStopRecording = useCallback(() => {
    if (interimRef.current.trim()) {
      transcriptRef.current = `${transcriptRef.current}${interimRef.current}`.trim();
      setTranscript(transcriptRef.current);
      interimRef.current = "";
      setInterimText("");
    }
    pausingRef.current = false;
    stopListening();
    setRecordingState("stopped");
    flushTranscriptToServer();
  }, [stopListening, flushTranscriptToServer]);

  const handleFabClick = useCallback(() => {
    if (open) return;
    startSession();
  }, [open, startSession]);

  const mergeInterimIntoTranscript = useCallback(() => {
    if (!interimRef.current.trim()) return;
    transcriptRef.current = `${transcriptRef.current}${interimRef.current}`.trim();
    setTranscript(transcriptRef.current);
    interimRef.current = "";
    setInterimText("");
  }, []);

  const handleClose = useCallback(() => {
    pausingRef.current = false;
    stopListening();
    mergeInterimIntoTranscript();
    flushTranscriptToServer();
    setRecordingState("idle");
    setOpen(false);
    setShowHistory(false);
  }, [stopListening, mergeInterimIntoTranscript, flushTranscriptToServer]);

  const handleStop = useCallback(() => {
    if (useTransportControls) {
      handleStopRecording();
      return;
    }
    stopListening();
    mergeInterimIntoTranscript();
    flushTranscriptToServer();
  }, [useTransportControls, handleStopRecording, stopListening, mergeInterimIntoTranscript, flushTranscriptToServer]);

  const handleCopy = useCallback(async () => {
    const text = `${transcript}${interimText ? ` ${interimText}` : ""}`.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      onToast?.({ message: "Copied to clipboard", variant: "success" });
    } catch {
      onToast?.({ message: "Could not copy text", variant: "error" });
    }
  }, [transcript, interimText, onToast]);

  const clearTranscript = useCallback(() => {
    setTranscript("");
    setInterimText("");
    transcriptRef.current = "";
    interimRef.current = "";
    lastFinalSyncRef.current = "";
  }, []);

  const handleNextField = useCallback(() => {
    const current = resolveInsertTarget(lastFieldRef);
    const next = findNextField(current);

    if (!next) {
      onToast?.({
        message: "No form fields found on this page",
        variant: "error",
      });
      return;
    }

    next.focus({ preventScroll: false });
    next.scrollIntoView({ behavior: "smooth", block: "center" });
    rememberField(next);
    clearTranscript();
  }, [rememberField, onToast, clearTranscript]);

  const handleInsert = useCallback(() => {
    const text = `${transcript}${interimText ? ` ${interimText}` : ""}`.trim();
    if (!text) return;

    const target = resolveInsertTarget(lastFieldRef);
    if (!target) {
      onToast?.({
        message: "Click a form field on the assessment, then press Insert",
        variant: "error",
      });
      return;
    }

    const inserted = insertIntoField(target, text);
    if (inserted) {
      saveHistoryEntry(historyKey, text);
      setHistory(loadHistory(historyKey));
      onToast?.({ message: "Inserted into active field", variant: "success" });
    } else {
      onToast?.({
        message: "Could not insert into the selected field",
        variant: "error",
      });
    }
  }, [transcript, interimText, onToast, historyKey]);

  const handleClear = clearTranscript;

  useEffect(() => () => stopListening(), [stopListening]);

  const displayText =
    transcript + (interimText ? (transcript ? " " : "") + interimText : "");

  return (
    <>
      <div style={S.dock} data-stt-assistant="dock">
        {open && (
          <div
            style={S.panel}
            role="dialog"
            aria-label="AI Transcription Assistant"
            data-stt-assistant="panel"
          >
            <div style={S.header}>
              <div style={S.headerTitle}>
                <FaMicrophone size={14} />
                <span>AI Transcription Assistant</span>
              </div>
              <button type="button" onClick={handleClose} style={S.closeBtn} aria-label="Close">
                <FaTimes size={16} />
              </button>
            </div>

            <div style={S.toolbar}>
              {useTransportControls ? (
                <>
                  <button
                    type="button"
                    onClick={handlePlay}
                    style={S.playBtn}
                    disabled={listening || loading}
                    aria-label="Play recording"
                  >
                    <FaPlay size={11} />
                    <span>Play</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePause}
                    style={S.pauseBtn}
                    disabled={!listening}
                    aria-label="Pause recording"
                  >
                    <FaPause size={11} />
                    <span>Pause</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleStopRecording}
                    style={S.stopBtn}
                    disabled={recordingState === "idle" && !transcript && !interimText}
                    aria-label="Stop recording"
                  >
                    <FaStop size={11} />
                    <span>Stop</span>
                  </button>
                  <span style={S.timer}>{formatTimer(elapsed)}</span>
                  <div style={S.liveBadge}>
                    <FaMicrophone
                      size={12}
                      color={listening ? "#16a34a" : recordingState === "paused" ? "#f59e0b" : "#94a3b8"}
                    />
                    <span>
                      {listening
                        ? "Recording…"
                        : recordingState === "paused"
                        ? "Paused"
                        : recordingState === "stopped"
                        ? "Stopped"
                        : "Ready"}
                    </span>
                    {listening && (
                      <div style={S.waveform} aria-hidden>
                        {[0, 1, 2, 3, 4].map((i) => (
                          <span key={i} style={{ ...S.waveBar, animationDelay: `${i * 0.12}s` }} />
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleStop}
                    style={S.stopBtn}
                    disabled={!listening}
                  >
                    <FaStop size={12} />
                    <span>Stop</span>
                  </button>
                  <span style={S.timer}>{formatTimer(elapsed)}</span>

                  <div style={S.liveBadge}>
                    <FaMicrophone
                      size={12}
                      color={listening ? "#16a34a" : "#94a3b8"}
                    />
                    <span>{listening ? "Live Listening..." : "Paused"}</span>
                    {listening && (
                      <div style={S.waveform} aria-hidden>
                        {[0, 1, 2, 3, 4].map((i) => (
                          <span key={i} style={{ ...S.waveBar, animationDelay: `${i * 0.12}s` }} />
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <textarea
              readOnly
              value={displayText}
              placeholder={
                useTransportControls
                  ? listening
                    ? "Speak now — your words will appear here..."
                    : recordingState === "paused"
                    ? "Recording paused — press Play to continue."
                    : recordingState === "stopped"
                    ? "Recording stopped — press Play to record more or Insert text."
                    : "Press Play to start recording."
                  : listening
                  ? "Speak now — your words will appear here..."
                  : "Press the mic button or Stop ended listening. Transcript appears here."
              }
              style={S.transcript}
            />

            <div style={S.actions}>
              <ActionBtn icon={<FaCopy size={18} />} label="Copy" onClick={handleCopy} />
              <ActionBtn
                icon={<FaWaveSquare size={18} />}
                label="Insert"
                onClick={handleInsert}
                primary
              />
              <ActionBtn
                icon={<FaArrowRight size={18} />}
                label="Next"
                onClick={handleNextField}
              />
              <ActionBtn icon={<FaEraser size={18} />} label="Clear" onClick={handleClear} />
              <ActionBtn
                icon={<FaHistory size={18} />}
                label="History"
                onClick={() => setShowHistory((v) => !v)}
                active={showHistory}
              />
            </div>

            {showHistory && (
              <div style={S.historyPanel}>
                {history.length === 0 ? (
                  <div style={S.historyEmpty}>No transcription history yet</div>
                ) : (
                  history.map((item) => (
                    <button
                      key={item.at}
                      type="button"
                      style={S.historyItem}
                      onClick={() => {
                        setTranscript(item.text);
                        setInterimText("");
                      }}
                    >
                      <span style={S.historyText}>{item.text}</span>
                      <span style={S.historyDate}>
                        {new Date(item.at).toLocaleString()}
                      </span>
                    </button>
                  ))
                )}
              </div>
            )}

            <div style={S.footer}>
              <FaInfoCircle size={11} />
              <span>
                {targetHint
                  ? `Target: ${targetHint}`
                  : "Select a field or press Next, then Insert."}
              </span>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleFabClick}
          disabled={loading || open}
          title="AI Transcription Assistant"
          aria-label="Open AI Transcription Assistant"
          style={{
            ...S.fab,
            ...(open ? S.fabActive : {}),
            ...(loading ? S.fabLoading : {}),
          }}
        >
          <FaMicrophone size={22} />
        </button>
      </div>

      <style>{`
        @keyframes sttWave {
          0%, 100% { transform: scaleY(0.35); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </>
  );
}

function ActionBtn({ icon, label, onClick, primary, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...S.actionBtn,
        ...(primary ? S.actionBtnPrimary : {}),
        ...(active ? S.actionBtnActive : {}),
      }}
    >
      <span style={S.actionIcon}>{icon}</span>
      <span style={S.actionLabel}>{label}</span>
    </button>
  );
}

const S = {
  dock: {
    position: "fixed",
    right: 20,
    bottom: 20,
    zIndex: 10001,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 12,
    pointerEvents: "none",
  },
  fab: {
    position: "relative",
    flexShrink: 0,
    width: 56,
    height: 56,
    borderRadius: "50%",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
    background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
    boxShadow: "0 4px 18px rgba(37, 99, 235, 0.45)",
    transition: "transform 0.15s, box-shadow 0.15s",
    pointerEvents: "auto",
  },
  fabActive: {
    boxShadow: "0 4px 18px rgba(5, 150, 105, 0.45)",
  },
  fabLoading: {
    opacity: 0.7,
    cursor: "wait",
  },
  panel: {
    width: 360,
    maxWidth: "calc(100vw - 100px)",
    maxHeight: "min(520px, calc(100vh - 40px))",
    background: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.22)",
    border: "1px solid #e2e8f0",
    fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 12px",
    background: "linear-gradient(90deg, #2563eb, #3b82f6)",
    color: "#fff",
    flexShrink: 0,
  },
  headerTitle: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 13,
    fontWeight: 700,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    padding: 4,
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderBottom: "1px solid #e2e8f0",
    flexWrap: "wrap",
    flexShrink: 0,
  },
  stopBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 12px",
    borderRadius: 6,
    border: "1px solid #fecaca",
    background: "#fef2f2",
    color: "#dc2626",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  },
  playBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 12px",
    borderRadius: 6,
    border: "1px solid #bbf7d0",
    background: "#f0fdf4",
    color: "#16a34a",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  },
  pauseBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 12px",
    borderRadius: 6,
    border: "1px solid #fde68a",
    background: "#fffbeb",
    color: "#d97706",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  },
  timer: {
    fontSize: 14,
    fontWeight: 700,
    color: "#0f172a",
    fontVariantNumeric: "tabular-nums",
  },
  liveBadge: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 11,
    fontWeight: 600,
    color: "#334155",
  },
  waveform: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    height: 20,
  },
  waveBar: {
    display: "block",
    width: 3,
    height: 16,
    borderRadius: 2,
    background: "#3b82f6",
    animation: "sttWave 0.8s ease-in-out infinite",
    transformOrigin: "center bottom",
  },
  transcript: {
    width: "100%",
    flex: 1,
    minHeight: 110,
    maxHeight: 200,
    padding: "12px 14px",
    border: "none",
    outline: "none",
    resize: "none",
    fontSize: 13,
    lineHeight: 1.5,
    color: "#1e293b",
    background: "#f8fafc",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  actions: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 6,
    padding: "8px 10px",
    borderTop: "1px solid #e2e8f0",
    flexShrink: 0,
  },
  actionBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    padding: "8px 4px",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    background: "#fff",
    cursor: "pointer",
    color: "#475569",
  },
  actionBtnPrimary: {
    borderColor: "#93c5fd",
    background: "#eff6ff",
    color: "#2563eb",
  },
  actionBtnActive: {
    borderColor: "#86efac",
    background: "#f0fdf4",
  },
  actionIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  actionLabel: {
    fontSize: 10,
    fontWeight: 600,
  },
  historyPanel: {
    maxHeight: 100,
    overflowY: "auto",
    borderTop: "1px solid #e2e8f0",
    background: "#fafafa",
  },
  historyEmpty: {
    padding: 16,
    textAlign: "center",
    fontSize: 12,
    color: "#94a3b8",
  },
  historyItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
    width: "100%",
    padding: "10px 16px",
    border: "none",
    borderBottom: "1px solid #e2e8f0",
    background: "transparent",
    cursor: "pointer",
    textAlign: "left",
  },
  historyText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 1.4,
  },
  historyDate: {
    fontSize: 11,
    color: "#94a3b8",
  },
  footer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 6,
    padding: "8px 12px",
    background: "#eff6ff",
    borderTop: "1px solid #dbeafe",
    fontSize: 11,
    lineHeight: 1.35,
    color: "#1d4ed8",
    flexShrink: 0,
  },
};
