import { type Dispatch, type SetStateAction } from "react";
import displayStyles from "./CalculatorDisplay.module.css";

export default function CalculationInput({
  Refresh,
  setRefresh,
  className,
  matrixHeights,
  textAreaContent,
  setTextAreaContent,
  activeCalculationID,
  setActiveCalculationID,
  calculationID,
}: {
  Refresh: number;
  setRefresh: Dispatch<SetStateAction<number>>;
  className: string;
  matrixHeights: number[];
  textAreaContent: string[];
  setTextAreaContent: Dispatch<SetStateAction<string[]>>;
  activeCalculationID: number;
  setActiveCalculationID: Dispatch<SetStateAction<number>>;
  calculationID: number;
}) {
  return (
    <section
      style={{ height: `${Math.max(...matrixHeights)}px` }}
      className={displayStyles.calculatorInputSection}
      id={"calcInputID" + calculationID}
    >
      {/*todo: add logic for calculator display here, allowing input from a keyboard or keypad, recognising when/if certain calculations can be done*/}
      <textarea
        className={className}
        value={textAreaContent[calculationID]}
        style={{
          height: `${Math.max(...matrixHeights) - 24}px`,
          width: "calc(60vw - 24px)",
          margin: "10px",
        }}
        onChange={(e) => {
          let tempArr = textAreaContent;
          tempArr.splice(calculationID, 1, e.target.value);
          console.log(tempArr);
          setTextAreaContent(tempArr);
          console.log(e.target.value);
          console.log(textAreaContent);
          setRefresh(1 - Refresh);
        }}
      ></textarea>
    </section>
  );
}
