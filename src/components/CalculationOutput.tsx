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
  const matrixNames = ["A", "B", "C", "D", "E", "F"];
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
      if (divisionCount > 0) {
        answer = handleDivision(textAreaContent[calculationID] || "");
      }
      if (multiplyCount > 0) {
        answer = handleMultiplication(textAreaContent[calculationID]) || "";
      }

      if (addCount > 0) {
        handleAddition(textAreaContent[calculationID]);
      }
      if (subtractCount > 0) {
        handleSubtraction(textAreaContent[calculationID]);
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
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(0, inputStr.indexOf("x"));
      rightSide = inputStr.slice(inputStr.indexOf("x") + 1);
      const leftCalc = parseInt(leftSide);
      const rightCalc = parseInt(rightSide);
      const outputString: string = (leftCalc * rightCalc).toString();
      if (outputString === "NaN") {
        return leftCalc.toString();
      } else {
        return outputString;
      }
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

      const leftCalc: string =
        handleMultiplication(leftSide) || parseInt(rightSide).toString();
      const rightCalc: string =
        handleMultiplication(rightSide) || parseInt(rightSide).toString();
      return (parseInt(leftCalc) * parseInt(rightCalc) || 1).toString();
    }
  }
  function handleAddition(inputStr: string) {
    let additionCount = 0;
    const inputStrArr: string[] = [];
    for (let i = 0; i < inputStr.length; i++) {
      inputStrArr.push(inputStr[i]);
      if (inputStr[i] === "x") {
        additionCount++;
      }
    }
    let leftSide = "";
    let rightSide = "";
    if (additionCount === 0) {
      return inputStr;
    } else if (additionCount === 1) {
    } else if (additionCount > 1) {
    }
  }
  function handleSubtraction(inputStr: string) {
    let subtractionCount = 0;
    const inputStrArr: string[] = [];

    for (let i = 0; i < inputStr.length; i++) {
      inputStrArr.push(inputStr[i]);
      if (inputStr[i] === "x") {
        subtractionCount++;
      }
    }
    let leftSide = "";
    let rightSide = "";
  }
  function handleDivision(inputStr: string) {
    const inputStrArr: string[] = [];
    let divisionCount = 0;
    for (let i = 0; i < inputStr.length; i++) {
      inputStrArr.push(inputStr[i]);
      if (inputStr[i] === "/") {
        divisionCount++;
      }
    }
    let leftSide = "";
    let rightSide = "";
    if (divisionCount === 0) {
      return inputStr;
    } else if (divisionCount === 1) {
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(0, inputStr.indexOf("/"));
      rightSide = inputStr.slice(inputStr.indexOf("/") + 1);
      const leftCalc = parseInt(leftSide);
      let rightCalc = parseInt(rightSide);
      if (rightCalc === 0) {
        rightCalc = 1;
      }
      const outputString: string = (leftCalc / rightCalc).toString();
      if (outputString === "NaN") {
        return leftCalc.toString();
      } else {
        return outputString;
      }
    } else if (divisionCount > 1) {
      const halfDivisionCount = Math.ceil(divisionCount / 2);
      let leftEndIndex = 0;
      let j = 0;
      for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] != "/") {
          leftSide += inputStr[i];
        } else {
          if (j < halfDivisionCount) {
            j++;
            leftSide += "/";
          } else if (j === halfDivisionCount) {
            leftEndIndex = i;
            i = inputStr.length;
          }
        }
      }
      rightSide = inputStr.slice(leftEndIndex + 1);

      const leftCalc: string =
        handleDivision(leftSide) || parseInt(rightSide).toString();
      let rightCalc: string =
        handleDivision(rightSide) || parseInt(rightSide).toString();
      if (rightCalc === "0") {
        rightCalc = "1";
      }
      return (parseInt(leftCalc) / parseInt(rightCalc) || 1).toString();
    }
  }
  return (
    <>
      <section
        id={"calcInputID" + calculationID}
        className={displayStyles.calculatorOutputSection}
      >
        {"\n"}

        {answer || "Answer goes here"}
        {/* 
        {stringAsArray.toString()} */}
      </section>
    </>
  );
}
