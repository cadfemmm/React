import React, { useEffect, useState } from "react";
import DepartmentAppointmentPatients from "../common/DepartmentAppointmentPatients";
import PsychologyAssessment from "./components/PsychologyAssessment";
import { fetchDepartmentAppointments } from "../../shared/api/patientsList";

const PSYCHOLOGY_DEPARTMENT = "Psychology";

/**
 * Psychology patients — appointment queue from:
 * GET appointment/appmts/?department_id=a700d94c-dbd0-45fc-ae64-6544b1bc403d
 */
export default function PsychologyPatients({
  patients: patientsProp,
  totalPatients: totalPatientsProp,
  loading: loadingProp,
  onBack,
  ...rest
}) {
  const [patients, setPatients] = useState(
    Array.isArray(patientsProp) ? patientsProp : [],
  );
  const [totalPatients, setTotalPatients] = useState(totalPatientsProp ?? 0);
  const [loading, setLoading] = useState(loadingProp ?? true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetchDepartmentAppointments(PSYCHOLOGY_DEPARTMENT, { page: 1, limit: 10 })
      .then(({ patients: list, meta }) => {
        if (cancelled) return;
        setPatients(list);
        setTotalPatients(meta?.total ?? list.length);
      })
      .catch((err) => {
        console.error("Failed to fetch Psychology appointments:", err);
        if (cancelled) return;
        // Keep any parent-provided list if the direct fetch fails
        if (Array.isArray(patientsProp) && patientsProp.length) {
          setPatients(patientsProp);
          setTotalPatients(totalPatientsProp ?? patientsProp.length);
        } else {
          setPatients([]);
          setTotalPatients(0);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <DepartmentAppointmentPatients
      {...rest}
      onBack={onBack}
      department={PSYCHOLOGY_DEPARTMENT}
      queueLabel="Today's psychology appointment queue"
      patients={patients}
      totalPatients={totalPatients}
      loading={loading}
      renderAssessment={({ patient, assessmentView, onBackToCards }) => (
        <PsychologyAssessment
          patient={patient}
          mode={assessmentView}
          onBack={onBackToCards}
          onSubmit={() => onBackToCards()}
        />
      )}
    />
  );
}
