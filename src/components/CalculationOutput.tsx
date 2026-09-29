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
    if (operatorCount > 0) {
      if (multiplyCount > 0) {
        if (multiplyCount % 2 != 0) {
        } else {
          answer = handleMultiplication(textAreaContent[calculationID]) || "";
        }
      }
      if (addCount > 0) {
      }
      if (subtractCount > 0) {
      }
      if (divisionCount > 0) {
      }
    }
  }
  function handleMultiplication(inputStr: string) {
    const inputStrArr = [];
    let multiplyCount = 0;
    for (let i = 0; i < inputStr.length; i++) {
      inputStrArr.push(inputStr[i]);
      if (inputStr[i] === "x") {
        multiplyCount++;
      }
    }
    let leftSide = "";
    let rightSide = "";
    if (multiplyCount === 0) {
      return inputStr;
    } else if (multiplyCount === 1) {
      leftSide = inputStr.slice(0, inputStr.indexOf("x"));
      rightSide = inputStr.slice(inputStr.indexOf("x") + 1);
      return (parseInt(leftSide) * parseInt(rightSide)).toString();
    } else if (multiplyCount > 1) {
      const halfMultCount = Math.ceil(multiplyCount / 2);
      let leftEndIndex = 0;
      let j = 0;
      for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] != "x") {
          leftSide += inputStr[i];
        } else {
          if (j < halfMultCount) {
            j++;
            leftSide += "x";
          } else if (j === halfMultCount) {
            leftEndIndex = i;
            i = inputStr.length;
          }
        }
      }
      rightSide = inputStr.slice(leftEndIndex + 1);

      let leftCalc: string = handleMultiplication(leftSide) || "1";
      let rightCalc: string = handleMultiplication(rightSide) || "1";
      return (parseInt(leftCalc) * parseInt(rightCalc) || 1).toString();
    }
  }
  function handleAddition() {}
  function handleSubtraction() {}
  function handleDivision() {}
  return (
    <>
      <section
        id={"calcInputID" + calculationID}
        className={displayStyles.calculatorOutputSection}
      >
        {"\n"}

        {answer}
        {/* 
        {stringAsArray.toString()} */}
      </section>
    </>
  );
}
