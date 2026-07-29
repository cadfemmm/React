import { useState } from "react";
import { CASP_SCHEMA } from "../schema/CASP_Schema";
import CommonFormBuilder from "../../CommonComponenets/FormBuilder";

const REFERENCE_IMAGES = [
  {
    title: "Naming",
    src: "/naming.png"
  },
  {
    title: "Reproducing a Copy of a Cube",
    src: "/cube.png"
  },
  {
    title: "Graphic Series",
    src: "/graphic.png"
  },
  {
    title: "Image Recall",
    src: "/imagerecall.png"
  },
  {
    title: "Praxis",
    src: "/praxis.png"
  },
  {
    title: "Calendar",
    src: "/calendar.png"
  }
];
console.log(REFERENCE_IMAGES)

export default function CASPAssessment() {
  const [values, setValues] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      value
    }));
  };

  const handleFormAction = (actionType) => {
    if (actionType === "education_reference") {
      setShowModal(true);
    }
  };

  const totalScore = () => {
    let sum = 0;

    Object.entries(values).forEach(([_, value]) => {
      if (typeof value === "number") {
        sum += value;
      }
    });

    return sum;
  };

  const computedValues = {
    ...values,
    total_casp_score: totalScore()
  };

  return (
    <>
      <CommonFormBuilder
        schema={CASP_SCHEMA}
        values={computedValues}
        onChange={handleChange}
        onAction={handleFormAction}
        layout="nested"
      />

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
 background: "#fff",
                            padding: 20,
                            borderRadius: 10,
                            maxWidth: "80vw",
                            maxHeight: "80vh",
                            overflow: "auto"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20
              }}
            >
              <h4 style={{ margin: 0 }}>
               Education Level Reference
              </h4>

              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: "#EF4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "8px 12px",
                  cursor: "pointer"
                }}
              >
                Close
              </button>
            </div>

            {REFERENCE_IMAGES.map((item) => (
  <div
    key={item.title}
    style={{
      
      borderRadius: 10,
      padding: 16,
      marginBottom: 20
    }}
  >
    <h4
      style={{
        marginTop: 0,
        marginBottom: 12
      }}
    >
      {item.title}
    </h4>

   <img
  src={item.src}
  alt={item.title}
  style={{
    width: "90%",
    maxWidth: "400px",
    display: "block",
    margin: "0 auto",
    transform: "rotate(180deg)"
  }}
  onError={(e) => {
    console.error(`Image not found: ${item.src}`);
    e.target.style.display = "none";
  }}
/>
  </div>
))}
          </div>
        </div>
      )}
    </>
  );
}