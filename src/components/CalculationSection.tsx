import displayStyles from "./CalculatorDisplay.module.css";
export default function CalculationSection({
  DisplayInput,
}: {
  DisplayInput: string;
}) {
  return (
    <section className={displayStyles.calculatorDisplaySection}>
      <textarea
        className={displayStyles.calculatorDisplayCalculatorInput}
        defaultValue={DisplayInput}
      ></textarea>
    </section>
  );
}
