import FormBuilderShell from "./form-builder-v2/FormBuilderShell";

export default function FormBuilderLauncher({ showBuilder, setShowBuilder }) {
  if (!showBuilder) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setShowBuilder(false)}
        aria-hidden="true"
      />

      <div className="relative w-full h-full bg-white flex flex-col">
        <FormBuilderShell onClose={() => setShowBuilder(false)} />
      </div>
    </div>
  );
}
