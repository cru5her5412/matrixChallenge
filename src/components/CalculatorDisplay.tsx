import displayStyles from "./CalculatorDisplay.module.css";
export default function CalculatorDisplay() {
  return (
    <>
      <section className={displayStyles.display}>
        <section className={displayStyles.calculatorDisplaySection}>
          Calculator here
        </section>
      </section>
    </>
  );
}
