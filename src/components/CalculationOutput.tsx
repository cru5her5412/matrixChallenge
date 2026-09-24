import displayStyles from "./CalculatorDisplay.module.css";

export default function CalculationOutput({
  className,
}: {
  className: string;
}) {
  return (
    <>
      <section className={displayStyles.calculatorOutputSection}>
        {" "}
        <div className={className}>Output</div>
        <div />
      </section>
    </>
  );
}
