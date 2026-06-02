import React, { useEffect, useState } from 'react';
import { X, Check, Calendar, User, Grid3x3, UserPlus, ArrowLeft, ArrowRight, Clock, CalendarDays, Bed, Info, AlertTriangle, ListChecks, Bell, } from 'lucide-react';
import { ModalShell } from './ModalShell.jsx';
import { continueSlots, reserveBooking, confirmBooking, } from './bookingQueueService.jsx';
const toast = {
    error: (message) => console.error(message),
};
const MODE_LABELS = {
    doctor: 'Per-Doctor',
    equipment: 'Per-Equipment',
    service: 'Per-Service',
};
const parseHour24 = (timeStr) => {
    const match = /^(\d{1,2}):\d{2}\s*(AM|PM)$/i.exec(timeStr.trim());
    if (!match)
        return 0;
    let h = Number.parseInt(match[1], 10);
    const period = match[2].toUpperCase();
    if (period === 'PM' && h !== 12)
        h += 12;
    if (period === 'AM' && h === 12)
        h = 0;
    return h;
};
const formatHourLabel = (h) => {
    if (h === 0)
        return '12 AM';
    if (h === 12)
        return '12 PM';
    if (h < 12)
        return `${h} AM`;
    return `${h - 12} PM`;
};
const stripPeriod = (timeStr) => timeStr.replace(/\s*(AM|PM)$/i, '').replace(/^0/, '');
const formatLongDate = (iso) => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime()))
        return iso;
    return d.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
};
const formatCountdown = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
};
const getInitials = (name) => name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
const slotKey = (slot) => `${slot.slot_date}__${slot.start_time}__${slot.configuration_id}`;
const isAvailable = (slot) => { var _a; return ((_a = slot.status) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'available' && slot.is_selectable !== false; };
const slotStartTimestamp = (slot) => {
    const m = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(slot.start_time.trim());
    if (!m)
        return Number.NaN;
    let h = Number.parseInt(m[1], 10);
    const mins = Number.parseInt(m[2], 10);
    const period = m[3].toUpperCase();
    if (period === 'PM' && h !== 12)
        h += 12;
    if (period === 'AM' && h === 12)
        h = 0;
    const [y, mo, d] = slot.slot_date
        .split('-')
        .map((x) => Number.parseInt(x, 10));
    if (!y || !mo || !d)
        return Number.NaN;
    return new Date(y, mo - 1, d, h, mins).getTime();
};
const isPastSlot = (slot, nowMs) => {
    const ts = slotStartTimestamp(slot);
    return Number.isFinite(ts) && ts < nowMs;
};
const formatNotificationTime = (ms) => {
    const d = new Date(ms);
    if (Number.isNaN(d.getTime()))
        return '—';
    const date = d.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
    const time = d.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });
    return `${date} · ${time}`;
};
const unavailableStripeStyle = {
    backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 4px, #f3f4f6 4px, #f3f4f6 8px)',
};
const SingleSlotButton = ({ slot, providerName, selected, onSelect }) => {
    const available = isAvailable(slot);
    const subTextClass = selected ? 'text-white/90' : 'text-primary-700';
    if (!available) {
        return (React.createElement("div", { title: `${providerName !== null && providerName !== void 0 ? providerName : ''} · Already booked`.trim(), "aria-disabled": true, className: "w-full h-full rounded-md px-2 py-2 text-left border border-gray-200 text-gray-400 cursor-not-allowed select-none", style: unavailableStripeStyle },
            React.createElement("div", { className: "font-semibold text-sm leading-tight line-through" }, stripPeriod(slot.start_time)),
            React.createElement("div", { className: "text-[10px] leading-tight" },
                slot.duration_minutes,
                "m"),
            React.createElement("div", { className: "text-[10px] leading-tight truncate" }, "Booked")));
    }
    return (React.createElement("button", { type: "button", onClick: () => onSelect(slot), title: providerName, className: `w-full h-full rounded-md px-2 py-2 text-left transition border ${selected
            ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
            : 'bg-primary-100 text-primary-700 border-primary-200 hover:bg-primary-200'}` },
        React.createElement("div", { className: "font-semibold text-sm leading-tight" }, stripPeriod(slot.start_time)),
        React.createElement("div", { className: `text-[10px] leading-tight ${subTextClass}` },
            slot.duration_minutes,
            "m"),
        providerName && (React.createElement("div", { className: `text-[10px] leading-tight truncate ${subTextClass}` }, providerName))));
};
const MultiSlotButton = ({ slot, providerName, selected, onSelect }) => {
    const available = isAvailable(slot);
    const subTextClass = selected ? 'text-white/90' : 'text-primary-700';
    if (!available) {
        return (React.createElement("div", { title: `${providerName !== null && providerName !== void 0 ? providerName : ''} · Already booked`.trim(), "aria-disabled": true, className: "rounded px-1 py-1 text-center leading-tight font-medium border border-gray-200 text-gray-400 cursor-not-allowed select-none", style: unavailableStripeStyle },
            React.createElement("div", { className: "text-[10px] font-semibold line-through" }, stripPeriod(slot.start_time)),
            React.createElement("div", { className: "text-[9px]" },
                slot.duration_minutes,
                "m"),
            React.createElement("div", { className: "text-[9px] truncate" }, "Booked")));
    }
    return (React.createElement("button", { type: "button", onClick: () => onSelect(slot), title: providerName, className: `rounded px-1 py-1 text-center leading-tight font-medium transition border ${selected
            ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
            : 'bg-primary-100 text-primary-700 border-primary-200 hover:bg-primary-200'}` },
        React.createElement("div", { className: "text-[10px] font-semibold" }, stripPeriod(slot.start_time)),
        React.createElement("div", { className: `text-[9px] ${subTextClass}` },
            slot.duration_minutes,
            "m"),
        providerName && (React.createElement("div", { className: `text-[9px] truncate ${subTextClass}` }, providerName))));
};
const SlotCell = ({ slots, providerName, selectedKeys, onSelect }) => {
    var _a, _b;
    if (slots.length === 0)
        return null;
    if (slots.length === 1) {
        return (React.createElement(SingleSlotButton, { slot: slots[0], providerName: (_b = (_a = slots[0].provider) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : providerName, selected: selectedKeys.has(slotKey(slots[0])), onSelect: onSelect }));
    }
    const cols = slots.length === 4 ? 2 : Math.min(slots.length, 3);
    return (React.createElement("div", { className: "grid h-full gap-1 auto-rows-fr", style: { gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` } }, slots.map((s) => {
        var _a, _b;
        return (React.createElement(MultiSlotButton, { key: slotKey(s), slot: s, providerName: (_b = (_a = s.provider) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : providerName, selected: selectedKeys.has(slotKey(s)), onSelect: onSelect }));
    })));
};
const Stepper = ({ step }) => {
    const labels = ['Configure', 'Search Slots', 'Select & Reserve', 'Confirm'];
    return (React.createElement("div", { className: "flex items-center justify-between mb-4 px-2" }, labels.map((label, idx) => {
        const n = (idx + 1);
        const done = step > n;
        const active = step === n;
        return (React.createElement(React.Fragment, { key: label },
            React.createElement("div", { className: "flex flex-col items-center gap-1 min-w-0" },
                React.createElement("div", { className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${done
                        ? 'bg-success-600 text-white'
                        : active
                            ? 'bg-primary-600 text-white'
                            : 'bg-white border text-gray-500'}` }, done ? React.createElement(Check, { size: 14 }) : n),
                React.createElement("div", { className: `text-xs ${active ? 'text-primary-600 font-medium' : 'text-gray-600'}` }, label)),
            idx < labels.length - 1 && (React.createElement("div", { className: `flex-1 h-px mx-2 ${step > n ? 'bg-success-600' : 'bg-gray-200'}` }))));
    })));
};
const ModeCard = ({ icon, title, description, active, isDefault, onClick }) => (React.createElement("button", { type: "button", onClick: onClick, className: `relative text-left border rounded-lg p-3 transition ${active
        ? 'border-primary bg-primary-100'
        : 'border-gray-200 hover:border-gray-300 bg-white'}` },
    isDefault && (React.createElement("span", { className: "absolute top-2 right-2 text-xs text-gray-600" }, "Default")),
    React.createElement("div", { className: `w-8 h-8 rounded flex items-center justify-center mb-2 ${active ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'}` }, icon),
    React.createElement("div", { className: "text-sm font-semibold text-gray-900" }, title),
    React.createElement("div", { className: "text-xs text-gray-600 mt-0.5" }, description)));
export const BookAppointmentModal = ({ open, row, initialMode = 'doctor', onClose, onConfirm, onRequestOverride, onAddWaitlist, onConflict, onCancel, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    console.log('row', row);
    const [step, setStep] = useState(1);
    const [mode, setMode] = useState('doctor');
    const [view, setView] = useState('grid');
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [resultState, setResultState] = useState('slots');
    const selectedKeys = React.useMemo(() => new Set(selectedSlots.map(slotKey)), [selectedSlots]);
    const toggleSlot = (slot) => {
        const key = slotKey(slot);
        setSelectedSlots((prev) => {
            if (prev.some((s) => slotKey(s) === key)) {
                return prev.filter((s) => slotKey(s) !== key);
            }
            return [...prev, slot];
        });
    };
    const primarySlot = (_a = selectedSlots[0]) !== null && _a !== void 0 ? _a : null;
    const [slotsData, setSlotsData] = useState(null);
    const [slotsLoading, setSlotsLoading] = useState(false);
    const [reservation, setReservation] = useState(null);
    const [reserving, setReserving] = useState(false);
    const [confirming, setConfirming] = useState(false);
    const [bookingNotes, setBookingNotes] = useState('');
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const [days, setDays] = useState([
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
    ]);
    const [fromDate, setFromDate] = useState(() => new Date().toISOString().slice(0, 10));
    const [toDate, setToDate] = useState(() => {
        const d = new Date();
        d.setDate(d.getDate() + 14);
        return d.toISOString().slice(0, 10);
    });
    const [activeRange, setActiveRange] = useState(14);
    const [fromTime, setFromTime] = useState('09:00');
    const [toTime, setToTime] = useState('17:00');
    useEffect(() => {
        if (open) {
            setMode(initialMode);
        }
    }, [open, initialMode]);
    const applyQuickRange = (days) => {
        const start = new Date(fromDate);
        if (Number.isNaN(start.getTime()))
            return;
        const end = new Date(start);
        end.setDate(start.getDate() + days);
        setToDate(end.toISOString().slice(0, 10));
        setActiveRange(days);
    };
    const quickRangeClass = (days) => activeRange === days
        ? 'px-2.5 py-1 border border-primary rounded text-xs text-primary-600 bg-primary-100/30'
        : 'px-2.5 py-1 border rounded text-xs text-gray-700 hover:bg-gray-50';
    const fromHour = Number.parseInt((_b = fromTime.split(':')[0]) !== null && _b !== void 0 ? _b : '0', 10);
    const toHour = Number.parseInt((_c = toTime.split(':')[0]) !== null && _c !== void 0 ? _c : '0', 10);
    const timeWindowInvalid = toHour <= fromHour;
    const todayIso = new Date().toISOString().slice(0, 10);
    const minToDate = fromDate && fromDate > todayIso ? fromDate : todayIso;
    useEffect(() => {
        if (!(reservation === null || reservation === void 0 ? void 0 : reservation.reservation_expires_at)) {
            setRemainingSeconds(0);
            return;
        }
        const expiresAt = new Date(reservation.reservation_expires_at).getTime();
        const tick = () => {
            const diff = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
            setRemainingSeconds(diff);
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [reservation === null || reservation === void 0 ? void 0 : reservation.reservation_expires_at]);
    if (!open || !row)
        return null;
    const closeAndReset = () => {
        setStep(1);
        setSelectedSlots([]);
        setResultState('slots');
        setSlotsData(null);
        setReservation(null);
        setBookingNotes('');
        onClose();
    };
    const buildSelectedSlotPayload = (slots) => slots.map((s) => ({
        slot_date: toApiDate(s.slot_date),
        start_time: s.start_time,
        end_time: s.end_time,
        configuration_id: s.configuration_id,
    }));
    const handleConfirmBooking = async () => {
        if (!row || !reservation || !primarySlot)
            return;
        if (!row.id) {
            toast.error('Missing booking ID');
            return;
        }
        setConfirming(true);
        try {
            const data = await confirmBooking(row.id, {
                booking_mode: reservation.service_details.booking_mode,
                slot_date: toApiDate(reservation.slot_resource.selected_date),
                start_time: reservation.slot_resource.start_time,
                end_time: reservation.slot_resource.end_time,
                booking_queue_id: reservation.booking_queue_id,
                configuration_id: reservation.configuration_id,
                selected_slots: buildSelectedSlotPayload(selectedSlots),
                booking_notes: bookingNotes,
            });
            onConfirm(data);
        }
        catch (_a) {
            toast.error('Failed to confirm booking');
        }
        finally {
            setConfirming(false);
        }
    };
    const handleReserveAndContinue = async () => {
        var _a, _b;
        if (!row || !primarySlot)
            return;
        if (!row.id) {
            toast.error('Missing booking ID');
            return;
        }
        setReserving(true);
        try {
            const data = await reserveBooking(row.id, {
                booking_mode: (_a = primarySlot.booking_mode) !== null && _a !== void 0 ? _a : MODE_LABELS[mode],
                slot_date: toApiDate(primarySlot.slot_date),
                start_time: primarySlot.start_time,
                end_time: primarySlot.end_time,
                configuration_id: primarySlot.configuration_id,
                selected_slots: buildSelectedSlotPayload(selectedSlots),
                booking_notes: bookingNotes,
            });
            setReservation(data);
            setBookingNotes((_b = data.booking_notes) !== null && _b !== void 0 ? _b : '');
            setStep(4);
        }
        catch (_c) {
            toast.error('Failed to reserve slot');
        }
        finally {
            setReserving(false);
        }
    };
    const toApiTime = (hhmm) => {
        const [h, m] = hhmm.split(':').map((s) => Number.parseInt(s, 10));
        if (Number.isNaN(h) || Number.isNaN(m))
            return hhmm;
        const period = h >= 12 ? 'PM' : 'AM';
        const hr12 = ((h + 11) % 12) + 1;
        return `${String(hr12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${period}`;
    };
    const toApiDate = (iso) => {
        const [y, m, d] = iso.split('-');
        if (!y || !m || !d)
            return iso;
        return `${d}-${m}-${y}`;
    };
    const handleContinueToSlots = async () => {
        if (!row)
            return;
        if (!row.id) {
            toast.error('Missing booking ID');
            return;
        }
        setSlotsLoading(true);
        try {
            const data = await continueSlots(row.id, {
                booking_mode: MODE_LABELS[mode],
                date_from: toApiDate(fromDate),
                date_to: toApiDate(toDate),
                from_time: toApiTime(fromTime),
                to_time: toApiTime(toTime),
                days_of_week: days,
            });
            setSlotsData(data);
            setSelectedSlots([]);
            setResultState(data.available_slot_count > 0 ? 'slots' : 'no-slots');
            setStep(3);
        }
        catch (_a) {
            toast.error('Failed to load slots');
        }
        finally {
            setSlotsLoading(false);
        }
    };
    return (React.createElement(ModalShell, { open: open, onClose: closeAndReset, width: 800 },
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex items-start justify-between p-4 border-b" },
                React.createElement("div", null,
                    React.createElement("div", { className: "text-lg font-semibold text-gray-900" }, "Book Appointment"),
                    React.createElement("div", { className: "text-xs text-gray-600" }, "Booking Queue / Sub-Section 1c")),
                React.createElement("button", { type: "button", onClick: closeAndReset, className: "text-gray-700 hover:text-gray-700" },
                    React.createElement(X, { size: 18 }))),
            React.createElement("div", { className: "p-4" },
                React.createElement(Stepper, { step: step }),
                step === 1 && (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "border rounded-lg p-3 mb-3" },
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("div", { className: "w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-semibold" }, row.patient
                                .split(' ')
                                .map((w) => w[0])
                                .slice(0, 2)
                                .join('')),
                            React.createElement("div", { className: "font-semibold text-gray-900" }, row.patient)),
                        React.createElement("div", { className: "flex items-center gap-2 mt-2" },
                            React.createElement("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700" },
                                row.department,
                                " / ",
                                row.disciplineCode),
                            React.createElement("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs bg-success-100 text-success-700" }, "From Referral"))),
                    React.createElement("div", { className: "border rounded-lg p-3 mb-3" },
                        React.createElement("div", { className: "text-sm font-semibold text-gray-900 mb-3" }, "Service Context"),
                        React.createElement("div", { className: "grid grid-cols-2 gap-3" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "text-xs text-gray-600" }, "Department"),
                                React.createElement("div", { className: "text-sm text-gray-900" }, row.department)),
                            React.createElement("div", null,
                                React.createElement("div", { className: "text-xs text-gray-600" }, "Discipline"),
                                React.createElement("div", { className: "text-sm text-gray-900 flex items-center gap-2" },
                                    row.disciplineCode,
                                    React.createElement("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-gray-100 text-gray-600" }, row.department))),
                            React.createElement("div", null,
                                React.createElement("div", { className: "text-xs text-gray-600" }, "Default Duration"),
                                React.createElement("div", { className: "text-sm text-gray-900" },
                                    "45 minutes",
                                    ' ',
                                    React.createElement("button", { type: "button", className: "text-primary-600 text-xs ml-1" }, "[Edit]"))),
                            React.createElement("div", null,
                                React.createElement("div", { className: "text-xs text-gray-600" }, "Priority"),
                                React.createElement("div", { className: "text-sm" },
                                    React.createElement("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs bg-danger-100 text-danger-600 font-medium" }, row.priority),
                                    React.createElement("span", { className: "text-gray-600 text-xs ml-2" }, "from referral")))),
                        React.createElement("div", { className: "mt-3 pt-3 border-t flex items-center justify-between" },
                            React.createElement("div", { className: "text-sm text-gray-600" },
                                "Referral:",
                                ' ',
                                React.createElement("span", { className: "text-gray-900 font-medium" }, row.refId)),
                            React.createElement("button", { type: "button", className: "text-xs text-primary-600 hover:text-primary-700" }, "View in ARMS \u2197"))),
                    React.createElement("div", { className: "border rounded-lg p-3 mb-3" },
                        React.createElement("div", { className: "text-sm font-semibold text-gray-900 mb-3" }, "Booking Mode"),
                        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2" },
                            React.createElement(ModeCard, { icon: React.createElement(User, { size: 16 }), title: "Per-Doctor", description: "Slot is a clinician's calendar time", active: mode === 'doctor', isDefault: true, onClick: () => setMode('doctor') }),
                            React.createElement(ModeCard, { icon: React.createElement(Grid3x3, { size: 16 }), title: "Per-Equipment", description: "Slot is a specific machine's availability", active: mode === 'equipment', onClick: () => setMode('equipment') }),
                            React.createElement(ModeCard, { icon: React.createElement(UserPlus, { size: 16 }), title: "Per-Service", description: "Slot is a group programme session", active: mode === 'service', onClick: () => setMode('service') }))))),
                step === 2 && (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "border rounded-lg p-3 mb-3" },
                        React.createElement("div", { className: "text-sm font-semibold text-gray-900 mb-3" }, "Date Range"),
                        React.createElement("div", { className: "grid grid-cols-2 gap-3 mb-2" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "text-xs text-gray-600 uppercase mb-1" }, "From"),
                                React.createElement("div", { className: "border rounded-md px-3 py-1.5 text-sm flex items-center gap-2 text-gray-900" },
                                    React.createElement(CalendarDays, { size: 14, className: "text-gray-500" }),
                                    React.createElement("input", { type: "date", value: fromDate, min: todayIso, onChange: (e) => {
                                            setFromDate(e.target.value);
                                            setActiveRange(null);
                                        }, className: "flex-1 outline-none bg-transparent text-sm text-gray-900" }))),
                            React.createElement("div", null,
                                React.createElement("div", { className: "text-xs text-gray-600 uppercase mb-1" }, "To"),
                                React.createElement("div", { className: "border rounded-md px-3 py-1.5 text-sm flex items-center gap-2 text-gray-900" },
                                    React.createElement(CalendarDays, { size: 14, className: "text-gray-500" }),
                                    React.createElement("input", { type: "date", value: toDate, min: minToDate, onChange: (e) => {
                                            setToDate(e.target.value);
                                            setActiveRange(null);
                                        }, className: "flex-1 outline-none bg-transparent text-sm text-gray-900" })))),
                        React.createElement("div", { className: "flex gap-2" },
                            React.createElement("button", { type: "button", onClick: () => applyQuickRange(7), className: quickRangeClass(7) }, "Next 7 days"),
                            React.createElement("button", { type: "button", onClick: () => applyQuickRange(14), className: quickRangeClass(14) }, "Next 14 days"),
                            React.createElement("button", { type: "button", onClick: () => applyQuickRange(30), className: quickRangeClass(30) }, "Next 30 days"))),
                    React.createElement("div", { className: "border rounded-lg p-3 mb-3" },
                        React.createElement("div", { className: "text-sm font-semibold text-gray-900 mb-3" }, "Time Window"),
                        React.createElement("div", { className: "mb-2" },
                            React.createElement("div", { className: "relative h-1 bg-gray-200 rounded-lg" },
                                React.createElement("div", { className: "absolute left-[15%] right-[5%] h-1 bg-primary-600 rounded-lg" }),
                                React.createElement("div", { className: "absolute left-[15%] -top-1 w-3 h-3 bg-white border-2 border-primary-600 rounded-lg" }),
                                React.createElement("div", { className: "absolute right-[5%] -top-1 w-3 h-3 bg-white border-2 border-primary-600 rounded-lg" })),
                            React.createElement("div", { className: "text-xs text-gray-600 mt-2" }, "Centre operates 8:00 AM \u2013 7:00 PM")),
                        React.createElement("div", { className: "grid grid-cols-2 gap-3 mt-3" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "text-xs text-gray-600 uppercase mb-1" }, "From Time"),
                                React.createElement("div", { className: "border rounded-md px-3 py-1.5 text-sm flex items-center gap-2 text-gray-900" },
                                    React.createElement(Clock, { size: 14, className: "text-gray-500" }),
                                    React.createElement("input", { type: "time", value: fromTime, onChange: (e) => setFromTime(e.target.value), className: "flex-1 outline-none bg-transparent text-sm text-gray-900" }))),
                            React.createElement("div", null,
                                React.createElement("div", { className: "text-xs text-gray-600 uppercase mb-1" }, "To Time"),
                                React.createElement("div", { className: "border rounded-md px-3 py-1.5 text-sm flex items-center gap-2 text-gray-900" },
                                    React.createElement(Clock, { size: 14, className: "text-gray-500" }),
                                    React.createElement("input", { type: "time", value: toTime, onChange: (e) => setToTime(e.target.value), className: "flex-1 outline-none bg-transparent text-sm text-gray-900" })))),
                        timeWindowInvalid && (React.createElement("div", { className: "text-xs text-danger-500 mt-2" }, "To Time must be after From Time \u2014 no slots will be available."))),
                    React.createElement("div", { className: "border rounded-lg p-3 mb-3" },
                        React.createElement("div", { className: "text-sm font-semibold text-gray-900 mb-3" }, "Days of Week"),
                        React.createElement("div", { className: "flex flex-wrap gap-2" }, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => {
                            const active = days.includes(d);
                            return (React.createElement("button", { key: d, type: "button", onClick: () => setDays((prev) => prev.includes(d)
                                    ? prev.filter((x) => x !== d)
                                    : [...prev, d]), className: `px-3 py-1.5 rounded text-xs font-medium border ${active
                                    ? 'bg-primary-600 text-white border-primary-600'
                                    : 'bg-white text-gray-700 border-gray-300'}` }, d));
                        })),
                        React.createElement("div", { className: "text-xs text-gray-600 mt-2" }, "Sat & Sun excluded by default")),
                    React.createElement("div", { className: "border rounded-lg p-3 mb-2" },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("div", { className: "text-sm font-semibold text-gray-900" }, "Additional Filters"),
                            React.createElement("button", { type: "button", className: "text-gray-500" }, "\u2304"))),
                    React.createElement("div", { className: "bg-primary-100 border border-primary rounded-lg p-3 flex items-start gap-2" },
                        React.createElement(Info, { size: 14, className: "text-primary-600 mt-0.5 shrink-0" }),
                        React.createElement("div", { className: "text-xs text-primary-700" },
                            "Patient preferences detected.",
                            ' ',
                            React.createElement("span", { className: "font-medium" }, row.patient),
                            " prefers morning sessions with female clinicians (from session history).")))),
                step === 3 && (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "flex items-center justify-between mb-2" },
                        React.createElement("div", { className: "text-sm text-gray-700" }, (_e = (_d = slotsData === null || slotsData === void 0 ? void 0 : slotsData.search_summary) === null || _d === void 0 ? void 0 : _d.label) !== null && _e !== void 0 ? _e : 'Showing 0 slots in selected range'),
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("button", { type: "button", onClick: () => setStep(2), className: "text-xs text-primary-600 inline-flex items-center gap-1" },
                                React.createElement(ArrowLeft, { size: 12 }),
                                " Refine search"),
                            React.createElement("div", { className: "inline-flex border rounded-md overflow-hidden text-xs" },
                                React.createElement("button", { type: "button", onClick: () => setView('grid'), className: `px-2 py-1 inline-flex items-center gap-1 ${view === 'grid'
                                        ? 'bg-primary-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-50'}` },
                                    React.createElement(Grid3x3, { size: 12 }),
                                    " Grid"),
                                React.createElement("button", { type: "button", onClick: () => setView('list'), className: `px-2 py-1 inline-flex items-center gap-1 border-l ${view === 'list'
                                        ? 'bg-primary-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-50'}` },
                                    React.createElement(ListChecks, { size: 12 }),
                                    " List")))),
                    resultState === 'slots' ? (React.createElement("div", { className: "grid grid-cols-12 gap-3" },
                        React.createElement("div", { className: "col-span-12 lg:col-span-7 border rounded-lg overflow-hidden" }, (() => {
                            var _a;
                            const daysList = (_a = slotsData === null || slotsData === void 0 ? void 0 : slotsData.slots_by_date) !== null && _a !== void 0 ? _a : [];
                            if (daysList.length === 0) {
                                return (React.createElement("div", { className: "p-6 text-center text-xs text-gray-500" }, "No slots available"));
                            }
                            const hourSet = new Set();
                            const byDayHour = new Map();
                            const nowMs = Date.now();
                            daysList.forEach((day) => {
                                const m = new Map();
                                day.slots.forEach((s) => {
                                    if (isPastSlot(s, nowMs))
                                        return;
                                    const h = parseHour24(s.start_time);
                                    hourSet.add(h);
                                    const list = m.get(h);
                                    if (list)
                                        list.push(s);
                                    else
                                        m.set(h, [s]);
                                });
                                byDayHour.set(day.date, m);
                            });
                            const sorted = Array.from(hourSet).sort((a, b) => a - b);
                            const hours = [];
                            const last = sorted.at(-1);
                            if (sorted.length && last !== undefined) {
                                for (let h = sorted[0]; h <= last; h++) {
                                    hours.push(h);
                                }
                            }
                            const colCount = daysList.length;
                            return (React.createElement("div", { className: "overflow-x-auto" },
                                React.createElement("div", { className: "grid text-xs", style: {
                                        gridTemplateColumns: `72px repeat(${colCount}, minmax(140px, 1fr))`,
                                    } },
                                    React.createElement("div", { className: "sticky left-0 bg-gray-50 border-b border-r z-10" }),
                                    daysList.map((day) => (React.createElement("div", { key: day.date, className: "bg-gray-50 border-b border-r last:border-r-0 px-3 py-2 text-sm font-semibold text-gray-700 text-center" }, day.label))),
                                    hours.map((h) => {
                                        const allEmpty = daysList.every((d) => {
                                            var _a, _b, _c;
                                            return ((_c = (_b = (_a = byDayHour.get(d.date)) === null || _a === void 0 ? void 0 : _a.get(h)) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) === 0;
                                        });
                                        if (allEmpty) {
                                            return (React.createElement(React.Fragment, { key: h },
                                                React.createElement("div", { className: "sticky left-0 bg-white border-r border-b px-3 py-3 text-sm text-gray-700 font-semibold z-10 flex items-center justify-start" }, formatHourLabel(h)),
                                                React.createElement("div", { className: "border-b text-center text-gray-400 italic py-3", style: {
                                                        gridColumn: `span ${colCount}`,
                                                        backgroundImage: 'repeating-linear-gradient(45deg, #f9fafb, #f9fafb 6px, #ffffff 6px, #ffffff 12px)',
                                                    } },
                                                    "No slots available (",
                                                    formatHourLabel(h),
                                                    " \u2013",
                                                    ' ',
                                                    formatHourLabel(h + 1),
                                                    ")")));
                                        }
                                        return (React.createElement(React.Fragment, { key: h },
                                            React.createElement("div", { className: "sticky left-0 bg-white border-r border-b px-3 py-2 text-sm text-gray-700 font-semibold z-10 flex items-center justify-start" }, formatHourLabel(h)),
                                            daysList.map((day) => {
                                                var _a, _b, _c;
                                                const cellSlots = (_b = (_a = byDayHour.get(day.date)) === null || _a === void 0 ? void 0 : _a.get(h)) !== null && _b !== void 0 ? _b : [];
                                                return (React.createElement("div", { key: day.date, className: "border-r border-b last:border-r-0 p-1 min-h-[72px] h-full" },
                                                    React.createElement(SlotCell, { slots: cellSlots, providerName: (_c = slotsData === null || slotsData === void 0 ? void 0 : slotsData.provider) === null || _c === void 0 ? void 0 : _c.name, selectedKeys: selectedKeys, onSelect: toggleSlot })));
                                            })));
                                    }))));
                        })()),
                        React.createElement("div", { className: "col-span-12 lg:col-span-5" },
                            React.createElement("div", { className: "border rounded-lg p-3" },
                                React.createElement("div", { className: "text-sm font-semibold text-gray-900 mb-2 flex items-center justify-between" },
                                    React.createElement("span", null, "Reservation Preview"),
                                    selectedSlots.length > 0 && (React.createElement("span", { className: "text-xs font-medium text-primary-600" },
                                        selectedSlots.length,
                                        " selected"))),
                                primarySlot ? (React.createElement(React.Fragment, null,
                                    React.createElement("div", { className: "border-b pb-2 mb-2 space-y-1 max-h-40 overflow-y-auto" }, selectedSlots.map((s) => {
                                        var _a, _b, _c;
                                        return (React.createElement("div", { key: slotKey(s) },
                                            React.createElement("div", { className: "text-sm font-semibold text-gray-900" }, (_b = (_a = slotsData === null || slotsData === void 0 ? void 0 : slotsData.slots_by_date.find((d) => d.date === s.slot_date)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : s.slot_date,
                                                ' ',
                                                "\u00B7 ",
                                                s.start_time,
                                                " \u2013 ",
                                                s.end_time),
                                            React.createElement("div", { className: "text-xs text-gray-600" },
                                                s.duration_minutes,
                                                " min \u00B7",
                                                ' ', (_c = s.booking_mode) !== null && _c !== void 0 ? _c : MODE_LABELS[mode],
                                                " mode")));
                                    })),
                                    React.createElement("div", { className: "text-xs text-gray-600 mb-2" }, "This slot reserves:"),
                                    React.createElement("div", { className: "space-y-2" },
                                        React.createElement("div", { className: "border rounded-md p-2 flex items-center gap-2" },
                                            React.createElement("div", { className: "w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-semibold" }, ((_f = slotsData === null || slotsData === void 0 ? void 0 : slotsData.patient.name) !== null && _f !== void 0 ? _f : row.patient)
                                                .split(' ')
                                                .map((w) => w[0])
                                                .slice(0, 2)
                                                .join('')),
                                            React.createElement("div", { className: "flex-1" },
                                                React.createElement("div", { className: "text-xs text-gray-600" }, "Patient"),
                                                React.createElement("div", { className: "text-sm font-medium text-gray-900" }, (_g = slotsData === null || slotsData === void 0 ? void 0 : slotsData.patient.name) !== null && _g !== void 0 ? _g : row.patient))),
                                        React.createElement("div", { className: "border rounded-md p-2 flex items-center gap-2" },
                                            React.createElement("div", { className: "w-7 h-7 rounded bg-primary-100 text-primary-600 flex items-center justify-center" },
                                                React.createElement(Bed, { size: 14 })),
                                            React.createElement("div", { className: "flex-1" },
                                                React.createElement("div", { className: "text-xs text-gray-600" }, "Service"),
                                                React.createElement("div", { className: "text-sm font-medium text-gray-900" }, slotsData === null || slotsData === void 0 ? void 0 :
                                                    slotsData.service_context.appointment_type,
                                                    ' · ', slotsData === null || slotsData === void 0 ? void 0 :
                                                    slotsData.service_context.department)))),
                                    (slotsData === null || slotsData === void 0 ? void 0 : slotsData.info) && (React.createElement("div", { className: "mt-3 bg-primary-100 text-primary-700 rounded-md px-3 py-2 text-xs flex items-start gap-1" },
                                        React.createElement(Info, { size: 12, className: "mt-0.5 shrink-0" }),
                                        ' ',
                                        slotsData.info)))) : (React.createElement("div", { className: "text-xs text-gray-500 italic py-4 text-center" }, "Select a slot to see reservation details")))))) : (React.createElement("div", { className: "grid grid-cols-12 gap-3" },
                        React.createElement("div", { className: "col-span-12 lg:col-span-7 border rounded-lg p-6 flex flex-col items-center justify-center min-h-[260px]" },
                            React.createElement("div", { className: "w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-3" },
                                React.createElement(Calendar, { size: 20 })),
                            React.createElement("div", { className: "text-sm font-semibold text-gray-900" }, "No slots available"),
                            React.createElement("div", { className: "text-xs text-gray-600 mt-1 mb-3" }, "All standard slots in your search range have resource conflicts."),
                            React.createElement("ul", { className: "text-xs text-gray-600 space-y-1" },
                                React.createElement("li", null, "\u2022 Try expanding your date range"),
                                React.createElement("li", null, "\u2022 Try different times of day"),
                                React.createElement("li", null, "\u2022 Try removing specific resource filters"))),
                        React.createElement("div", { className: "col-span-12 lg:col-span-5 space-y-3" },
                            React.createElement("div", { className: "border border-warning rounded-lg p-3 bg-warning-100/30" },
                                React.createElement("div", { className: "flex items-center gap-2 text-warning-700 font-semibold text-sm mb-1" },
                                    React.createElement(AlertTriangle, { size: 14 }),
                                    " Request Override"),
                                React.createElement("div", { className: "text-xs text-warning-700 mb-2" }, "Book outside normal availability with manager approval. Requires written justification. Audit-logged for 14 years."),
                                React.createElement("div", { className: "text-xs text-warning-700 mb-2" }, "Approver: Dept Manager Aziz bin Ahmad"),
                                React.createElement("button", { type: "button", onClick: onRequestOverride, className: "w-full text-xs px-3 py-1.5 rounded-md bg-warning-700 text-white hover:opacity-90 inline-flex items-center justify-center gap-1" },
                                    "Request Override ",
                                    React.createElement(ArrowRight, { size: 12 }))),
                            React.createElement("div", { className: "border rounded-lg p-3" },
                                React.createElement("div", { className: "flex items-center gap-2 font-semibold text-sm mb-1" },
                                    React.createElement(Clock, { size: 14 }),
                                    " Add to Waitlist"),
                                React.createElement("div", { className: "text-xs text-gray-600 mb-2" }, "Patient added to waitlist for this service. System will alert you when a slot opens up naturally."),
                                React.createElement("div", { className: "text-xs text-gray-600 mb-2" }, "CM task will be created automatically when slot opens"),
                                React.createElement("button", { type: "button", onClick: onAddWaitlist, className: "w-full text-xs px-3 py-1.5 rounded-md border text-gray-700 hover:bg-gray-50 inline-flex items-center justify-center gap-1" },
                                    "Add to Waitlist ",
                                    React.createElement(ArrowRight, { size: 12 })))))))),
                step === 4 && (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "bg-primary-100/30 border border-primary rounded-lg p-3 flex items-center justify-between mb-3" },
                        React.createElement("div", { className: "flex items-center gap-2 text-sm text-gray-900" },
                            React.createElement(Clock, { size: 14, className: "text-primary-600" }),
                            React.createElement("span", null,
                                React.createElement("span", { className: "text-gray-600" },
                                    "Reservation held for:",
                                    ' '),
                                React.createElement("span", { className: "font-semibold" }, formatCountdown(remainingSeconds)))),
                        React.createElement("button", { type: "button", className: "text-xs text-primary-600 hover:text-primary-700" }, "What does this mean?")),
                    React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3" },
                        React.createElement("div", { className: "border rounded-lg p-3" },
                            React.createElement("div", { className: "text-xs text-gray-600 uppercase mb-2 pb-2 border-b" }, "Patient"),
                            React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                                React.createElement("div", { className: "w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-semibold" }, getInitials((_h = reservation === null || reservation === void 0 ? void 0 : reservation.patient.name) !== null && _h !== void 0 ? _h : row.patient)),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "text-sm font-semibold text-gray-900" }, (_j = reservation === null || reservation === void 0 ? void 0 : reservation.patient.name) !== null && _j !== void 0 ? _j : row.patient),
                                    React.createElement("div", { className: "text-xs text-gray-600" }, reservation
                                        ? `${reservation.patient.masked_ic} · ${reservation.patient.age} yrs · ${reservation.patient.gender}`
                                        : '—'))),
                            React.createElement("div", { className: "flex items-center justify-between pt-2 border-t" },
                                React.createElement("div", { className: "text-xs text-gray-600 uppercase" }, "Centre"),
                                React.createElement("div", { className: "text-sm text-gray-900" }, (_k = reservation === null || reservation === void 0 ? void 0 : reservation.centre_name) !== null && _k !== void 0 ? _k : '—')),
                            React.createElement("button", { type: "button", className: "text-xs text-primary-600 hover:text-primary-700 mt-2" }, "View in Patient Master \u2197")),
                        React.createElement("div", { className: "border rounded-lg p-3" },
                            React.createElement("div", { className: "text-xs text-gray-600 uppercase mb-2 pb-2 border-b" }, "Service"),
                            React.createElement("div", { className: "space-y-1.5 text-sm" },
                                React.createElement("div", { className: "flex items-center justify-between" },
                                    React.createElement("span", { className: "text-xs text-gray-600 uppercase" }, "Department"),
                                    React.createElement("span", { className: "text-gray-900" }, (_l = reservation === null || reservation === void 0 ? void 0 : reservation.service_details.department) !== null && _l !== void 0 ? _l : row.department)),
                                React.createElement("div", { className: "flex items-center justify-between" },
                                    React.createElement("span", { className: "text-xs text-gray-600 uppercase" }, "Discipline"),
                                    React.createElement("span", { className: "text-gray-900" }, row.disciplineCode || '—')),
                                React.createElement("div", { className: "flex items-center justify-between" },
                                    React.createElement("span", { className: "text-xs text-gray-600 uppercase" }, "Duration"),
                                    React.createElement("span", { className: "text-gray-900" }, reservation
                                        ? `${reservation.service_details.duration} min`
                                        : '—')),
                                React.createElement("div", { className: "flex items-center justify-between" },
                                    React.createElement("span", { className: "text-xs text-gray-600 uppercase" }, "Booking Mode"),
                                    React.createElement("span", { className: "text-gray-900" }, (_m = reservation === null || reservation === void 0 ? void 0 : reservation.service_details.booking_mode) !== null && _m !== void 0 ? _m : 'Per-Doctor')))),
                        React.createElement("div", { className: "border rounded-lg p-3" },
                            React.createElement("div", { className: "text-xs text-gray-600 uppercase mb-2 pb-2 border-b flex items-center justify-between" },
                                React.createElement("span", null, "Slot & Resources"),
                                selectedSlots.length > 1 && (React.createElement("span", { className: "text-xs font-medium text-primary-600 normal-case" },
                                    selectedSlots.length,
                                    " slots"))),
                            selectedSlots.length > 0 ? (React.createElement("ul", { className: "list-none p-0 m-0 space-y-2 max-h-48 overflow-y-auto" }, selectedSlots.map((s) => {
                                var _a, _b, _c;
                                return (React.createElement("li", { key: slotKey(s), className: "pb-2 border-b last:border-b-0 last:pb-0" },
                                    React.createElement("div", { className: "text-sm font-semibold text-gray-900" },
                                        formatLongDate(s.slot_date),
                                        " \u00B7 ",
                                        s.start_time,
                                        " \u2013",
                                        ' ',
                                        s.end_time),
                                    React.createElement("div", { className: "text-xs text-gray-600 mt-1 flex items-center justify-between" },
                                        React.createElement("span", { className: "uppercase" }, "Provider"),
                                        React.createElement("span", { className: "text-gray-900 normal-case" }, (_c = (_b = (_a = s.provider) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : reservation === null || reservation === void 0 ? void 0 : reservation.slot_resource.provider_name) !== null && _c !== void 0 ? _c : '—'))));
                            }))) : (React.createElement(React.Fragment, null,
                                React.createElement("div", { className: "text-sm font-semibold text-gray-900 mb-2" }, reservation
                                    ? `${formatLongDate(reservation.slot_resource.selected_date)} · ${reservation.slot_resource.start_time} – ${reservation.slot_resource.end_time}`
                                    : '—'),
                                React.createElement("div", { className: "space-y-1.5 text-sm" },
                                    React.createElement("div", { className: "flex items-center justify-between" },
                                        React.createElement("span", { className: "text-xs text-gray-600 uppercase" }, "Provider"),
                                        React.createElement("span", { className: "text-gray-900" }, (_o = reservation === null || reservation === void 0 ? void 0 : reservation.slot_resource.provider_name) !== null && _o !== void 0 ? _o : '—')))))),
                        React.createElement("div", { className: "border rounded-lg p-3" },
                            React.createElement("div", { className: "text-xs text-gray-600 uppercase mb-2 pb-2 border-b" }, "Audit & Linkage"),
                            React.createElement("div", { className: "space-y-1.5 text-sm" },
                                React.createElement("div", { className: "flex items-center justify-between" },
                                    React.createElement("span", { className: "text-xs text-gray-600 uppercase" }, "Entry Path"),
                                    React.createElement("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-success-100 text-success-700" }, "From Referral")),
                                React.createElement("div", { className: "flex items-center justify-between" },
                                    React.createElement("span", { className: "text-xs text-gray-600 uppercase" }, "Linked Referral"),
                                    React.createElement("span", { className: "text-gray-900" }, row.refId)),
                                React.createElement("div", { className: "flex items-center justify-between" },
                                    React.createElement("span", { className: "text-xs text-gray-600 uppercase" }, "Booking Queue ID"),
                                    React.createElement("span", { className: "text-gray-900 text-xs" }, (_q = (_p = reservation === null || reservation === void 0 ? void 0 : reservation.booking_queue_id) === null || _p === void 0 ? void 0 : _p.slice(0, 8)) !== null && _q !== void 0 ? _q : '—')),
                                React.createElement("div", { className: "flex items-center justify-between" },
                                    React.createElement("span", { className: "text-xs text-gray-600 uppercase" }, "Appt ID"),
                                    React.createElement("span", { className: "text-gray-500 italic" }, "(pending)"))))),
                    React.createElement("div", { className: "border rounded-lg p-3 mb-3" },
                        React.createElement("div", { className: "text-xs text-gray-600 uppercase mb-2" }, "Booking Notes (Optional)"),
                        React.createElement("textarea", { placeholder: "Add context for the clinician on session day (clinical notes, accommodations, special instructions)...", className: "form-control form-sm w-full", rows: 3, maxLength: 500, value: bookingNotes, onChange: (e) => setBookingNotes(e.target.value) }),
                        React.createElement("div", { className: "text-xs text-gray-600 mt-1 flex items-center justify-between" },
                            React.createElement("span", null, "Notes will be visible to the assigned clinician at session start."),
                            React.createElement("span", null,
                                bookingNotes.length,
                                " / 500"))),
                    (() => {
                        const primaryTs = primarySlot
                            ? slotStartTimestamp(primarySlot)
                            : Number.NaN;
                        const hasPrimary = Number.isFinite(primaryTs);
                        const nowMs = Date.now();
                        const notifications = [
                            {
                                label: 'Patient SMS at T-24h',
                                time: hasPrimary
                                    ? formatNotificationTime(primaryTs - 24 * 60 * 60 * 1000)
                                    : '—',
                            },
                            {
                                label: 'Patient SMS at T-1h',
                                time: hasPrimary
                                    ? formatNotificationTime(primaryTs - 60 * 60 * 1000)
                                    : '—',
                            },
                            {
                                label: 'Provider calendar invite (immediate)',
                                time: 'Now',
                            },
                            {
                                label: 'CM digest (next email batch)',
                                time: formatNotificationTime(nowMs),
                            },
                        ];
                        return (React.createElement("div", { title: "Configuration is not yet done", className: "bg-gray-100 border border-gray-300 rounded-lg p-3 opacity-60 cursor-not-allowed" },
                            React.createElement("div", { className: "text-sm font-semibold text-gray-600 mb-2" }, "Notifications"),
                            React.createElement("div", { className: "space-y-1 text-xs" }, notifications.map((n) => (React.createElement("div", { key: n.label, className: "flex items-center justify-between text-gray-600" },
                                React.createElement("span", { className: "inline-flex items-center gap-1" },
                                    React.createElement(Bell, { size: 12, className: "text-gray-500" }),
                                    n.label),
                                React.createElement("span", null, n.time))))),
                            React.createElement("div", { className: "text-xs text-gray-600 mt-2 italic" }, "Configuration is not yet done.")));
                    })()))),
            React.createElement("div", { className: "border-t p-4 flex items-center justify-between" },
                React.createElement("div", { className: "text-xs text-gray-600" },
                    step === 1 && 'Confirm configuration to continue',
                    step === 2 && 'Confirm configuration to continue',
                    step === 3 &&
                        'No standard slots — use Override or Waitlist to proceed',
                    step === 4 && 'Review and confirm to commit booking'),
                React.createElement("div", { className: "flex items-center gap-2" },
                    step === 1 ? (React.createElement("button", { type: "button", onClick: onCancel !== null && onCancel !== void 0 ? onCancel : closeAndReset, className: "px-4 py-1.5 border rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50" }, "Cancel")) : (React.createElement("button", { type: "button", onClick: () => setStep((s) => (s - 1)), className: "px-4 py-1.5 border rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50 inline-flex items-center gap-1" },
                        React.createElement(ArrowLeft, { size: 12 }),
                        " Back")),
                    step < 3 && (React.createElement("button", { type: "button", disabled: slotsLoading, onClick: () => {
                            if (step === 2) {
                                handleContinueToSlots();
                            }
                            else {
                                setStep((s) => (s + 1));
                            }
                        }, className: "px-4 py-1.5 rounded-md text-sm text-white bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-1 disabled:opacity-60" },
                        step === 2 && slotsLoading
                            ? 'Loading slots…'
                            : 'Continue to Slots',
                        ' ',
                        React.createElement(ArrowRight, { size: 12 }))),
                    step === 3 && resultState === 'slots' && (React.createElement("button", { type: "button", onClick: handleReserveAndContinue, disabled: selectedSlots.length === 0 || reserving, className: "px-4 py-1.5 rounded-md text-sm text-white bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-1 disabled:opacity-60" },
                        reserving ? 'Reserving…' : 'Reserve & Continue',
                        ' ',
                        React.createElement(ArrowRight, { size: 12 }))),
                    step === 3 && resultState === 'no-slots' && (React.createElement("button", { type: "button", onClick: onConflict, className: "px-4 py-1.5 rounded-md text-sm text-white bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-1" },
                        "Reserve & Continue ",
                        React.createElement(ArrowRight, { size: 12 }))),
                    step === 4 && (React.createElement("button", { type: "button", onClick: handleConfirmBooking, disabled: confirming || !reservation, className: "px-4 py-1.5 rounded-md text-sm text-white bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-1 disabled:opacity-60" },
                        confirming ? 'Confirming…' : 'Confirm Booking',
                        ' ',
                        React.createElement(ArrowRight, { size: 12 }))))))));
};
