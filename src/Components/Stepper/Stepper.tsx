function Stepper({
  activeStep,
  steps,
}: {
  activeStep: number;
  steps: string[];
}) {
  return (
    <section>
      <section className="h-full m-0">
        <span className="text-slate-800 p-0 m-0 text-xs font-bold">
          {steps[activeStep]}
        </span>
        <div className="w-full bg-slate-50 pt-0">
          <div
            className="h-2 bg-teal-500"
            style={{
              width:
                activeStep === 0 ? "33.3%" : activeStep == 1 ? "66.6%" : "100%",
            }}
          ></div>
        </div>
      </section>
    </section>
  );
}

export default Stepper;
