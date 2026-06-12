import { useState, useCallback, memo } from "react";
import { SCHEMA } from "../../schema/optometry/binocular_vision";
import CommonFormBuilder from "../CommonComponenets/FormBuilder";

const BinocularVisionAssessment = memo(function BinocularVisionAssessment({
  schema,
  onBack,
  layout = "root",
  values: externalValues,
  onChange: externalOnChange,
}) {
  const [internalValues, setInternalValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Use controlled values if provided by the adapter, else local state
  const values = externalValues ?? internalValues;

  const internalOnChange = useCallback((name, value) => {
    setInternalValues((v) => ({ ...v, [name]: value }));
  }, []);

  const onChange = externalOnChange ?? internalOnChange;

  const onAction = useCallback(
    (type) => {
      if (type === "submit") setSubmitted(true);
      if (type === "back") onBack?.();
    },
    [onBack],
  );

  return (
    <CommonFormBuilder
      schema={SCHEMA}
      values={values}
      onChange={onChange}
      submitted={submitted}
      onAction={onAction}
      layout={layout}
    />
  );
});

export default BinocularVisionAssessment;
