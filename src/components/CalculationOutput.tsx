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
  let answer: string = "";
  let stringAsArray = [];
  let operatorCount = 0;
  let addCount = 0;
  let subtractCount = 0;
  let multiplyCount = 0;
  let divisionCount = 0;
  for (let i = 0; i < textAreaContent[calculationID].length; i++) {
    stringAsArray.push(textAreaContent[calculationID][i]);
    if (textAreaContent[calculationID][i] === "x") {
      operatorCount++;
      multiplyCount++;
    } else if (textAreaContent[calculationID][i] === "+") {
      operatorCount++;
      addCount++;
    } else if (textAreaContent[calculationID][i] === "-") {
      operatorCount++;
      subtractCount++;
    } else if (textAreaContent[calculationID][i] === "/") {
      operatorCount++;
      divisionCount++;
    }
  }

  return (
    <>
      <section
        id={"calcInputID" + calculationID}
        className={displayStyles.calculatorOutputSection}
      >
        {"\n"}
        {textAreaContent[calculationID] || "Answer Goes Here"}
        {"\n"}
        {textAreaContent[calculationID].indexOf("x")}
        {"\n"}

        {answer}
        {stringAsArray.toString()}
      </section>
    </>
  );
}
