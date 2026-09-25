import type { Dispatch, SetStateAction } from "react";
import displayStyles from "./CalculatorDisplay.module.css";
export default function CalculationOutput({
  className,
  textAreaContent,
  setTextAreaContent,
  activeCalculationCount,
  setActiveCalculationCount,
  calculationID,
}: {
  className: string;
  textAreaContent: string[];
  setTextAreaContent: Dispatch<SetStateAction<string[]>>;
  activeCalculationCount: number;
  setActiveCalculationCount: Dispatch<SetStateAction<number>>;
  calculationID: number;
}) {
  return (
    <>
      <section
        id={"calcInputID" + calculationID}
        className={displayStyles.calculatorOutputSection}
      >
        {" "}
        {textAreaContent[calculationID] || "Answer Goes Here"}
      </section>
    </>
  );
}
