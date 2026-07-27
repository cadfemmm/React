import React, { useState, useEffect } from "react";

/* Parent Assessments & Programs */
import WorkRehab from "./workrehab";
import VocationalRehab from "./vocationalrehab";
import OccupationalRehab from "./Occupational_performance.jsx";
import PreVocational from "./PreVocational";
import VocationalProgress from "./VocationalProgress";
import VocationalTraining from "./vocational.jsx";
import IntegratedTraining from "./Integrated.jsx";

/* Functional Assessment Components */
import BakeryFunctional from "./BakeryFunctional";

/* Integrated Training Components */
import BakeryIntegrated from "./BakeryIntegrated.jsx";

export default function PatientDetails({ patient, mode }) {
  const [assessmentType] = useState(mode || "initial");
  const [activeTab, setActiveTab] = useState("vocationalrehab");
  const [activeSubTab, setActiveSubTab] = useState(null);

  const [vocationalValues, setVocationalValues] = useState({});
  const [functionalVocationalValues, setFunctionalVocationalValues] = useState({});

  // Helper function to map array of selected options to subtab definitions
  const mapSelectedModulesToTabs = (modulesList) => {
    const interests = Array.isArray(modulesList) ? modulesList : [];
    const tabs = [];

    const hasAny = (keys) => keys.some((k) => interests.includes(k));

    if (hasAny(["3d_innovation", "threed_innovation", "threedinnovation"])) {
      tabs.push({ key: "threedinnovation", label: "3D Innovation" });
    }
    if (hasAny(["art_crafts", "art_and_crafts", "art_craft"])) {
      tabs.push({ key: "artcrafts", label: "Art & Crafts" });
    }
    if (hasAny(["automotive_technology", "automotive"])) {
      tabs.push({ key: "automotive", label: "Automotive Technology" });
    }
    if (hasAny(["bakery"])) {
      tabs.push({ key: "bakery", label: "Bakery" });
    }
    if (hasAny(["barista"])) {
      tabs.push({ key: "barista", label: "Barista" });
    }
    if (hasAny(["call_centre", "call_center"])) {
      tabs.push({ key: "callcentre", label: "Call Centre" });
    }
    if (hasAny(["carpentry"])) {
      tabs.push({ key: "carpentry", label: "Carpentry" });
    }
    if (hasAny(["creative_multimedia", "creativemultimedia"])) {
      tabs.push({ key: "creativemultimedia", label: "Creative Multimedia" });
    }
    if (hasAny(["culinary"])) {
      tabs.push({ key: "culinary", label: "Culinary" });
    }
    if (hasAny(["design_printing", "design", "designprinting"])) {
      tabs.push({ key: "design", label: "Design & Printing" });
    }
    if (hasAny(["domestic_electrical", "domesticelectrical"])) {
      tabs.push({ key: "domesticelectrical", label: "Domestic Electrical" });
    }
    if (hasAny(["electrical", "electric"])) {
      tabs.push({ key: "electric", label: "Electrical" });
    }
    if (hasAny(["electric_vehicle", "ev", "electricvehicle"])) {
      tabs.push({ key: "ev", label: "Electric Vehicle (EV)" });
    }
    if (hasAny(["electronics", "electronic"])) {
      tabs.push({ key: "electronic", label: "Electronics" });
    }
    if (hasAny(["entrepreneurship", "enterpreneurship"])) {
      tabs.push({ key: "enterpreneurship", label: "Entrepreneurship" });
    }
    if (hasAny(["floristry", "florist"])) {
      tabs.push({ key: "florist", label: "Floristry" });
    }
    if (hasAny(["graphic_virtual_arts", "graphic_arts", "innvart"])) {
      tabs.push({ key: "innvart", label: "Graphic & Virtual Arts" });
    }
    if (hasAny(["hairstyling"])) {
      tabs.push({ key: "hairstyling", label: "Hairstyling" });
    }
    if (hasAny(["job_profiling_readiness", "job_profiling"])) {
      tabs.push({ key: "jobprofiling", label: "Job Profiling & Readiness" });
    }
    if (hasAny(["office_admin", "office_administration", "officeadmin"])) {
      tabs.push({ key: "officeadmin", label: "Office Administration" });
    }
    if (hasAny(["sewing_fashion", "sewing"])) {
      tabs.push({ key: "sewing", label: "Sewing & Fashion" });
    }
    if (hasAny(["spa_cosmetology", "spa", "cosmetology"])) {
      tabs.push({ key: "spacosmetology", label: "Spa & Cosmetology" });
    }
    if (hasAny(["urban_farming", "urbanfarming"])) {
      tabs.push({ key: "urbanfarming", label: "Urban Farming" });
    }
    if (hasAny(["work_trial", "worktrial"])) {
      tabs.push({ key: "worktrial", label: "Work Trial" });
    }

    return tabs;
  };

  const getVocationalTrainingTabs = () => {
    return mapSelectedModulesToTabs(vocationalValues?.referred_module);
  };

  const getIntegratedTrainingTabs = () => {
    return mapSelectedModulesToTabs(
      functionalVocationalValues?.referred_module_functional
    );
  };

  const TABS = [
    { key: "workrehab", label: "Work Rehab" },
    { key: "vocationalrehab", label: "Vocational Readiness Program" },
    { key: "functionalvocational", label: "Occupational Performance Program" },
    {
      key: "vocationaltraining",
      label: "Vocational Training Program",
      subTabs: getVocationalTrainingTabs(),
    },
    {
      key: "integratedfunctionaltraining",
      label: "Integrated Functional Training",
      subTabs: getIntegratedTrainingTabs(),
    },
  ];

  // Sync active sub-tab when parent tab changes
  useEffect(() => {
    const currentTab = TABS.find((t) => t.key === activeTab);

    if (currentTab?.subTabs?.length > 0) {
      setActiveSubTab(currentTab.subTabs[0].key);
    } else {
      setActiveSubTab(null);
    }
  }, [activeTab, vocationalValues, functionalVocationalValues]);

  const renderContent = () => {
    if (assessmentType === "progress") {
      return <VocationalProgress patient={patient} />;
    }

    if (activeTab === "workrehab") return <WorkRehab patient={patient} />;

    if (activeTab === "vocationalrehab") {
      return (
        <VocationalRehab
          patient={patient}
          onValuesChange={setVocationalValues}
        />
      );
    }

    if (activeTab === "prevocationalscreening") {
      return <PreVocational patient={patient} />;
    }

    if (activeTab === "functionalvocational") {
      return (
        <OccupationalRehab
          patient={patient}
          onValuesChange={setFunctionalVocationalValues}
          modules={functionalVocationalValues?.referred_module_functional || []}
          activeSubTab={activeSubTab}
        />
      );
    }

    /* Vocational Training Tab */
    if (activeTab === "vocationaltraining") {
      if (!activeSubTab) {
        return <div style={emptyState}>No modules selected yet.</div>;
      }

      // Redirect Bakery to BakeryFunctional
      if (activeSubTab === "bakery") {
        return <BakeryFunctional patient={patient} />;
      }

      return (
        <VocationalTraining
          patient={patient}
          modules={vocationalValues?.referred_module || []}
          activeSubTab={activeSubTab}
        />
      );
    }

    /* Integrated Functional Training Tab */
    if (activeTab === "integratedfunctionaltraining") {
      if (!activeSubTab) {
        return <div style={emptyState}>No modules selected yet.</div>;
      }

      // Redirect Bakery to BakeryIntegrated
      if (activeSubTab === "bakery") {
        return <BakeryIntegrated patient={patient} />;
      }

      return (
        <IntegratedTraining
          patient={patient}
          modules={
            functionalVocationalValues?.referred_module_functional || []
          }
          activeSubTab={activeSubTab}
        />
      );
    }

    return null;
  };

  if (assessmentType === "progress") {
    return (
      <div style={{ fontFamily: "Inter, system-ui" }}>
        <div style={content}>{renderContent()}</div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Inter, system-ui" }}>
      {/* Primary Navigation Bar */}
      <div style={tabRow}>
        {TABS.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              ...tabItem,
              ...(activeTab === tab.key ? activeTabStyle : {}),
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Secondary Dynamic Sub-Tabs */}
      {(() => {
        const currentTab = TABS.find((t) => t.key === activeTab);
        const hasSubTabs = currentTab?.subTabs?.length > 0;

        if (!hasSubTabs) return null;

        return (
          <div style={subTabRow}>
            {currentTab.subTabs.map((sub) => (
              <div
                key={sub.key}
                onClick={() => setActiveSubTab(sub.key)}
                style={{
                  ...subTabItem,
                  ...(activeSubTab === sub.key ? subTabActive : {}),
                }}
              >
                {sub.label}
              </div>
            ))}
          </div>
        );
      })()}

      {/* Viewport Content */}
      <div style={content}>{renderContent()}</div>
    </div>
  );
}

const tabRow = {
  display: "flex",
  gap: 32,
  padding: "12px 20px",
  borderBottom: "1px solid #e5e7eb",
  background: "#fff",
  overflowX: "auto",
};

const tabItem = {
  fontSize: 15,
  fontWeight: 500,
  cursor: "pointer",
  color: "#374151",
  paddingBottom: 8,
  whiteSpace: "nowrap",
};

const activeTabStyle = {
  color: "#2563eb",
  borderBottom: "3px solid #2563eb",
  fontWeight: 600,
};

const subTabRow = {
  display: "flex",
  gap: 16,
  padding: "10px 20px",
  borderBottom: "1px solid #e5e7eb",
  background: "#f9fafb",
  overflowX: "auto",
};

const subTabItem = {
  fontSize: 13,
  cursor: "pointer",
  paddingBottom: 6,
  color: "#6b7280",
  whiteSpace: "nowrap",
};

const subTabActive = {
  color: "#2563eb",
  borderBottom: "2px solid #2563eb",
  fontWeight: 600,
};

const content = {
  padding: 20,
};

const emptyState = {
  padding: 40,
  textAlign: "center",
  background: "#f9fafb",
  border: "2px dashed #e5e7eb",
  borderRadius: 12,
  marginTop: 8,
};