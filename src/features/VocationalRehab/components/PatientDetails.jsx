import React, { useState, useEffect } from "react";

/* Components */
import WorkRehab from "./workrehab";
import VocationalRehab from "./vocationalrehab";
import WorkhardeningProgress from "./WorkhardeningProgress";

// import PreIntegratedFunctional from "./PreIntegratedFunctional";
// import PostIntegratedFunctional from "./PostIntegratedFunctional";

import PreVocational from "./PreVocational";
import CulinaryIntegrated from "./CulinaryIntegrated";
import BakeryIntegrated from "./BakeryIntegrated.jsx";
import BaristaIntegrated from "./BaristaIntegrated.jsx";
import SewingIntegrated from './SewingIntegrated.jsx';
import HairstylingIntegrated from "./HairstylingIntegrated.jsx";
import DesignIntegrated from "./DesignIntegrated.jsx";
import OfficeIntegrated from './OfficeIntegrated.jsx';
import ElectronicIntegrated from "./ElectronicIntegrated.jsx";
import ElectricIntegrated from './ElectricIntegrated.jsx';
import EntrepreneurshipIntegrated from './EnterpreneurshipIntegrated.jsx';
import CreativeMultimediaIntegrated from './CreativeMultimediaIntegrated.jsx';
import FloristryIntegrated from './FloristIntegrated.jsx';
import ThreeDInnovationIntegrated  from './ThreeDInnovationIntegrated.jsx';
import UrbanFarmingIntegrated from './UrbanfarmingIntegrated.jsx'

import ElectricFunctional from "./ElectricFunctional";
import ElectronicFunctional from "./ElectronicFunctional";
import OfficeadminAssessment from "./OfficeadminAssessment";
import SewingFunctional from "./SewingFunctional";
import CulinaryFunctional from "./CulinaryFunctional";
import DesignFunctional from "./DesignFunctional";
import BakeryFunctional from "./BakeryFunctional";
import BaristaFunctional from "./BaristaFunctional";
import FloristFunctional from "./FloristFunctional";
import HairstylingFunctional from "./HairstylingFunctional";
import EnterpreneurshipFunctional from "./EnterpreneurshipFunctional";
import InnovartFunctional from "./InnovartFunctional";

export default function PatientDetails({ patient, mode }) {

  const [assessmentType] = useState(mode || "initial");

  const [activeTab, setActiveTab] =
    useState("vocationalrehab");

  const [activeSubTab, setActiveSubTab] =
    useState(null);

  const [activeChildTab, setActiveChildTab] =
    useState(null);

  const [vocationalValues, setVocationalValues] =
    useState({});

  /* =========================================================
     FUNCTIONAL VOCATIONAL TABS
  ========================================================= */

  const getFunctionalVocationalTabs = () => {

    const interests =
      vocationalValues?.client_interest || [];

    const tabs = [];

    if (interests.includes("electrical")) {
      tabs.push({
        key: "electric",
        label: "Electric"
      });
    }

    if (interests.includes("electronics")) {
      tabs.push({
        key: "electronic",
        label: "Electronic"
      });
    }

    if (interests.includes("office_admin")) {
      tabs.push({
        key: "officeadmin",
        label: "Office Admin"
      });
    }

    if (interests.includes("sewing")) {
      tabs.push({
        key: "sewing",
        label: "Sewing"
      });
    }

    if (interests.includes("culinary")) {
      tabs.push({
        key: "culinary",
        label: "Culinary"
      });
    }

    if (interests.includes("bakery")) {
      tabs.push({
        key: "bakery",
        label: "Bakery"
      });
    }

    if (interests.includes("barista")) {
      tabs.push({
        key: "barista",
        label: "Barista"
      });
    }

    if (interests.includes("design")) {
      tabs.push({
        key: "design",
        label: "Design"
      });
    }

    if (interests.includes("innovart")) {
      tabs.push({
        key: "innvart",
        label: "Innovart"
      });
    }

    if (interests.includes("florist")) {
      tabs.push({
        key: "florist",
        label: "Florist"
      });
    }

    if (interests.includes("entrepreneurship")) {
      tabs.push({
        key: "enterpreneurship",
        label: "Enterpreneurship"
      });
    }

    if (interests.includes("hairstyling")) {
      tabs.push({
        key: "hairstyling",
        label: "Hairstyling"
      });
    }
    /* =========================================================
   ADD NEW INTEGRATED INTERESTS
========================================================= */

if (interests.includes("creative_multimedia")) {
  tabs.push({
    key: "creativemultimedia",
    label: "Creative Multimedia"
  });
}

if (interests.includes("3d_innovation")) {
  tabs.push({
    key: "threedinnovation",
    label: "3D Innovation"
  });
}

if (interests.includes("urban_farming")) {
  tabs.push({
    key: "urbanfarming",
    label: "Urban Farming"
  });
}

    return tabs;
  };

  /* =========================================================
     INTEGRATED FUNCTIONAL CHILD TABS
  ========================================================= */

  const integratedTabs =
    getFunctionalVocationalTabs().map((item) => ({
      key: item.key,
      label: item.label,

      // childTabs: [
      //   {
      //     key: `${item.key}_pre`,
      //     label: "Pre"
      //   },

      //   {
      //     key: `${item.key}_post`,
      //     label: "Post"
      //   }
      // ]
    }));

  /* =========================================================
     MAIN TABS
  ========================================================= */

  const TABS = [
    {key:'workrehab',label:'Work Rehab'},
    
    {
      key: "vocationalrehab",
      label: "Pre-Vocational Rehab"
    },

    {
      key: "functionalvocational",
      label: "Functional Vocational",
      subTabs: getFunctionalVocationalTabs()
    },

    {
      key: "vocationaltraining",
      label: "Vocational Training",

      subTabs: [
        {
          key: "progress",
          label: "Progress Intervention"
        },

        {
          key: "discharge",
          label: "Discharge"
        }
      ]
    },

    {
      key: "integratedfunctionaltraining",
      label: "Integrated Functional Training",

      subTabs: integratedTabs
    }
  ];

  /* =========================================================
     AUTO SELECT FIRST TAB
  ========================================================= */

  useEffect(() => {

    const currentTab = TABS.find(
      (t) => t.key === activeTab
    );

    if (currentTab?.subTabs?.length > 0) {

      const firstSubTab =
        currentTab.subTabs[0];

      setActiveSubTab(firstSubTab.key);

      if (firstSubTab?.childTabs?.length > 0) {

        setActiveChildTab(
          firstSubTab.childTabs[0].key
        );

      } else {

        setActiveChildTab(null);

      }

    } else {

      setActiveSubTab(null);
      setActiveChildTab(null);

    }

  }, [activeTab, vocationalValues]);

  /* =========================================================
     RENDER CONTENT
  ========================================================= */

  const renderContent = () => {

    /* WORK REHAB */

    if (activeTab === "workrehab") {

      return assessmentType === "progress"
        ? <WorkhardeningProgress patient={patient} />
        : <WorkRehab patient={patient} />;

    }

    /* PRE VOCATIONAL */

    if (activeTab === "vocationalrehab") {

      return (
        <VocationalRehab
          patient={patient}
          onValuesChange={setVocationalValues}
        />
      );
    }

    /* PRE VOCATIONAL SCREENING */

    if (activeTab === "prevocationalscreening") {

      return (
        <PreVocational patient={patient} />
      );
    }

    /* FUNCTIONAL VOCATIONAL */

    if (activeTab === "functionalvocational") {

      switch (activeSubTab) {

        case "electric":
          return <ElectricFunctional patient={patient} />;

        case "electronic":
          return <ElectronicFunctional patient={patient} />;

        case "officeadmin":
          return <OfficeadminAssessment patient={patient} />;

        case "sewing":
          return <SewingFunctional patient={patient} />;

        case "culinary":
          return <CulinaryFunctional patient={patient} />;

        case "bakery":
          return <BakeryFunctional patient={patient} />;

        case "barista":
          return <BaristaFunctional patient={patient} />;

        case "design":
          return <DesignFunctional patient={patient} />;

        case "hairstyling":
          return <HairstylingFunctional patient={patient} />;

        case "innvart":
          return <InnovartFunctional patient={patient} />;

        case "enterpreneurship":
          return <EnterpreneurshipFunctional patient={patient} />;

        case "florist":
          return <FloristFunctional patient={patient} />;

        default:
          return (
            <div>
              No Functional Vocational Selected
            </div>
          );
      }
    }

    /* VOCATIONAL TRAINING */

    if (activeTab === "vocationaltraining") {

      switch (activeSubTab) {

        case "progress":
          return <div>📈 Progress Intervention</div>;

        case "discharge":
          return <div>✅ Discharge</div>;

        default:
          return null;
      }
    }

    /* =========================================================
       INTEGRATED FUNCTIONAL TRAINING
    ========================================================= */

//     if (activeTab === "integratedfunctionaltraining") {

//       switch (activeChildTab) {

//         /* ELECTRIC */

//         case "electric_pre":
//           return <ElectricIntegrated patient={patient} type='pre' />;

//         case "electric_post":
//           return <ElectricIntegrated patient={patient} type='post' />;

//         /* ELECTRONIC */

//         case "electronic_pre":
//           return <ElectronicIntegrated patient={patient} type='pre' />;

//         case "electronic_post":
//           return <ElectronicIntegrated patient={patient} type='post' />;

//         /* OFFICE ADMIN */

//         case "officeadmin_pre":
//           return <OfficeIntegrated patient={patient} type='pre' />;

//         case "officeadmin_post":
//           return <OfficeIntegrated patient={patient} type='post'/>;

//         /* SEWING */

//         case "sewing_pre":
//           return <SewingIntegrated patient={patient} type="pre"/>;

//         case "sewing_post":
//           return <SewingIntegrated patient={patient}  type="post" />;

//         /* CULINARY */

//         case "culinary_pre":
//           return (
//             <CulinaryIntegrated
//               patient={patient}
//               type="pre"
//             />
//           );

//         case "culinary_post":
//           return (
//             <CulinaryIntegrated
//               patient={patient}
//              type="post"
//             />
//           );

//         /* BAKERY */

//         // case "bakery_pre":
//         //   return <PreIntegratedFunctional patient={patient} />;

//         // case "bakery_post":
//         //   return <PostIntegratedFunctional patient={patient} />;
//          case "bakery_pre":
//           return (
//             <BakeryIntegrated
//               patient={patient}
//               type="pre"
//             />
//           );

//         case "bakery_post":
//           return (
//             <BakeryIntegrated
//               patient={patient}
//               type="post"
//             />
//           );


//         /* BARISTA */

//         case "barista_pre":
//           return <BaristaIntegrated  patient={patient}  type="pre" />;

//         case "barista_post":
//           return <BaristaIntegrated patient={patient}   type="post"/>;

//         /* DESIGN */

//         case "design_pre":
//           return <DesignIntegrated patient={patient} type='pre' />;

//         case "design_post":
//           return <DesignIntegrated patient={patient} type='post'/>;

//         /* HAIRSTYLING */

//         case "hairstyling_pre":
//           return <HairstylingIntegrated patient={patient} type='pre'/>;

//         case "hairstyling_post":
//           return <HairstylingIntegrated patient={patient} type='post' />;

//         /* INNOVART */

//         case "innvart_pre":
//           return <PreIntegratedFunctional patient={patient} />;

//         case "innvart_post":
//           return <PostIntegratedFunctional patient={patient} />;

//         /* ENTERPRENEURSHIP */

//         case "enterpreneurship_pre":
//           return <EntrepreneurshipIntegrated patient={patient} type='pre' />;

//         case "enterpreneurship_post":
//           return <EntrepreneurshipIntegrated patient={patient} type='post' />;

//         /* FLORIST */

//         case "florist_pre":
//           return <FloristryIntegrated patient={patient} type='pre' />;

//         case "florist_post":
//           return <FloristryIntegrated patient={patient} type='post'/>;
//         /* CREATIVE MULTIMEDIA */

// case "creativemultimedia_pre":
//   return (
//     <CreativeMultimediaIntegrated
//       patient={patient}
//       type="pre"
//     />
//   );

// case "creativemultimedia_post":
//   return (
//     <CreativeMultimediaIntegrated
//       patient={patient}
//       type="post"
//     />
//   );

// /* 3D INNOVATION */

// case "threedinnovation_pre":
//   return (
//     <ThreeDInnovationIntegrated
//       patient={patient}
//       type="pre"
//     />
//   );

// case "threedinnovation_post":
//   return (
//     <ThreeDInnovationIntegrated
//       patient={patient}
//       type="post"
//     />
//   );

// /* URBAN FARMING */

// case "urbanfarming_pre":
//   return (
//     <UrbanFarmingIntegrated
//       patient={patient}
//       type="pre"
//     />
//   );

// case "urbanfarming_post":
//   return (
//     <UrbanFarmingIntegrated
//       patient={patient}
//       type="post"
//     />
//   );

//         default:
//           return null;
//       }
//     }
if (activeTab === "integratedfunctionaltraining") {

  switch (activeSubTab) {

    case "electric":
      return (
        <ElectricIntegrated
          patient={patient}
        />
      );

    case "electronic":
      return (
        <ElectronicIntegrated
          patient={patient}
        />
      );

    case "officeadmin":
      return (
        <OfficeIntegrated
          patient={patient}
        />
      );

    case "sewing":
      return (
        <SewingIntegrated
          patient={patient}
        />
      );

    case "culinary":
      return (
        <CulinaryIntegrated
          patient={patient}
        />
      );

    case "bakery":
      return (
        <BakeryIntegrated
          patient={patient}
        />
      );

    case "barista":
      return (
        <BaristaIntegrated
          patient={patient}
        />
      );

    case "design":
      return (
        <DesignIntegrated
          patient={patient}
        />
      );

    case "hairstyling":
      return (
        <HairstylingIntegrated
          patient={patient}
        />
      );

    case "innvart":
      return (
        <InnovartFunctional
          patient={patient}
        />
      );

    case "enterpreneurship":
      return (
        <EntrepreneurshipIntegrated
          patient={patient}
        />
      );

    case "florist":
      return (
        <FloristryIntegrated
          patient={patient}
        />
      );

    case "creativemultimedia":
      return (
        <CreativeMultimediaIntegrated
          patient={patient}
        />
      );

    case "threedinnovation":
      return (
        <ThreeDInnovationIntegrated
          patient={patient}
        />
      );

    case "urbanfarming":
      return (
        <UrbanFarmingIntegrated
          patient={patient}
        />
      );

    default:
      return null;
  }
}
    return null;
  };

  /* =========================================================
     UI
  ========================================================= */

  return (

    <div style={{ fontFamily: "Inter, system-ui" }}>

      {/* TOP TABS */}

      <div style={tabRow}>

        {TABS.map((tab) => (

          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              ...tabItem,

              ...(activeTab === tab.key
                ? activeTabStyle
                : {})
            }}
          >
            {tab.label}
          </div>

        ))}

      </div>

      {/* SUB TABS */}

      {TABS.find(
        (t) => t.key === activeTab
      )?.subTabs?.length > 0 && (

        <div style={subTabRow}>

          {TABS.find(
            (t) => t.key === activeTab
          ).subTabs.map((sub) => (

            <div
              key={sub.key}

              onClick={() => {

                setActiveSubTab(sub.key);

                if (sub?.childTabs?.length > 0) {

                  setActiveChildTab(
                    sub.childTabs[0].key
                  );

                } else {

                  setActiveChildTab(null);

                }

              }}

              style={{
                ...subTabItem,

                ...(activeSubTab === sub.key
                  ? subTabActive
                  : {})
              }}
            >
              {sub.label}
            </div>

          ))}

        </div>

      )}

      {/* CHILD TABS */}

      {TABS.find(
        (t) => t.key === activeTab
      )
        ?.subTabs?.find(
          (s) => s.key === activeSubTab
        )
        ?.childTabs?.length > 0 && (

        <div style={childTabRow}>

          {TABS.find(
            (t) => t.key === activeTab
          )
            ?.subTabs.find(
              (s) => s.key === activeSubTab
            )
            ?.childTabs.map((child) => (

              <div
                key={child.key}

                onClick={() =>
                  setActiveChildTab(child.key)
                }

                style={{
                  ...childTabItem,

                  ...(activeChildTab === child.key
                    ? childTabActive
                    : {})
                }}
              >
                {child.label}
              </div>

            ))}

        </div>

      )}

      {/* CONTENT */}

      <div style={content}>
        {renderContent()}
      </div>

    </div>
  );
}

/* =========================================================
   STYLES
========================================================= */

const tabRow = {
  display: "flex",
  gap: 32,
  padding: "12px 20px",
  borderBottom: "1px solid #e5e7eb",
  background: "#fff",
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
};

const subTabItem = {
  fontSize: 13,
  cursor: "pointer",
  paddingBottom: 6,
  color: "#6b7280",
};

const subTabActive = {
  color: "#2563eb",
  borderBottom: "2px solid #2563eb",
  fontWeight: 600,
};

const childTabRow = {
  display: "flex",
  gap: 12,
  padding: "10px 30px",
  borderBottom: "1px solid #e5e7eb",
  background: "#f3f4f6",
};

const childTabItem = {
  fontSize: 12,
  cursor: "pointer",
  padding: "6px 12px",
  borderRadius: 6,
  color: "#374151",
  background: "#e5e7eb",
};

const childTabActive = {
  background: "#2563eb",
  color: "#fff",
  fontWeight: 600,
};

const content = {
  padding: 20,
};