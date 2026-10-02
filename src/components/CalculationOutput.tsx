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
  let additionCount = 0;
  let subtractionCount = 0;
  let multiplyCount = 0;
  let divisionCount = 0;
  const matrixNames = ["A", "B", "C", "D", "E", "F"];
  const validNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let i = 0; i < textAreaContent[calculationID].length; i++) {
    stringAsArray.push(textAreaContent[calculationID][i]);
    if (textAreaContent[calculationID][i] === "x") {
      operatorCount++;
      multiplyCount++;
    } else if (textAreaContent[calculationID][i] === "+") {
      operatorCount++;
      additionCount++;
    } else if (textAreaContent[calculationID][i] === "-") {
      operatorCount++;
      subtractionCount++;
    } else if (textAreaContent[calculationID][i] === "/") {
      operatorCount++;
      divisionCount++;
    }
    if (operatorCount > 0) {
      if (divisionCount > 0) {
        answer = handleDivision(textAreaContent[calculationID]) || "";
      }
      if (multiplyCount > 0) {
        answer = handleMultiplication(textAreaContent[calculationID]) || "";
      }

      if (additionCount > 0) {
        answer = handleAddition(textAreaContent[calculationID]) || "";
      }
      if (subtractionCount > 0) {
        answer = handleSubtraction(textAreaContent[calculationID]) || "";
      }
    }
  }
  function handleDivision(
    inputStr: string,
    // divisionCount: number,
    // multiplyCount: number,
    // additionCount: number,
    // subtractionCount: number,
  ) {
    let currDivisionCount = 0;
    const inputStrArr: string[] = [];
    for (let i = 0; i < inputStr.length; i++) {
      inputStrArr.push(inputStr[i]);
      if (inputStr[i] === "/") {
        currDivisionCount++;
      }
    }
    let leftSide = "";
    let rightSide = "";
    if (currDivisionCount === 0) {
      return inputStr;
    } else if (currDivisionCount === 1) {
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(0, inputStr.indexOf("/"));
      rightSide = inputStr.slice(inputStr.indexOf("/") + 1);
      const leftCalc = parseFloat(leftSide);
      let rightCalc = parseFloat(rightSide);
      if (rightCalc === 0) {
        rightCalc = 1;
      }
      const outputString: string = (leftCalc / rightCalc).toString();
      if (outputString === "NaN") {
        return leftCalc.toString();
      } else {
        return outputString;
      }
    } else if (currDivisionCount > 1) {
      const halfDivisionCount = Math.ceil(currDivisionCount / 2);
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

      const leftCalc: string = handleDivision(leftSide) || "1";
      let rightCalc: string = handleDivision(rightSide) || "1";
      if (rightCalc === "0") {
        rightCalc = "1";
      }
      return (parseFloat(leftCalc) / parseFloat(rightCalc)).toString();
    }
  }
  function handleMultiplication(
    inputStr: string,
    // divisionCount: number,
    // multiplyCount: number,
    // additionCount: number,
    // subtractionCount: number,
  ) {
    const inputStrArr = [];
    let currMultiplyCount = 0;
    for (let i = 0; i < inputStr.length; i++) {
      inputStrArr.push(inputStr[i]);
      if (inputStr[i] === "x") {
        currMultiplyCount++;
      }
    }
    let leftSide = "";
    let rightSide = "";
    if (currMultiplyCount === 0) {
      return inputStr;
    } else if (currMultiplyCount === 1) {
      let startOfNum = inputStr.indexOf("x") - 1;
      for (let i = inputStr.indexOf("x"); i > 0; i--) {
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStrArr[i]) {
            startOfNum--;
          }
        }
      }
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(startOfNum, inputStr.indexOf("x"));
      rightSide = inputStr.slice(inputStr.indexOf("x") + 1);
      const leftCalc = parseFloat(leftSide);
      const rightCalc = parseFloat(rightSide);
      const outputString: string = (leftCalc * rightCalc).toString();
      if (outputString === "NaN") {
        return leftCalc.toString();
      } else {
        return outputString;
      }
    } else if (currMultiplyCount > 1) {
      const halfMultCount = Math.ceil(currMultiplyCount / 2);
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

      const leftCalc: string = handleMultiplication(leftSide) || "1";
      const rightCalc: string = handleMultiplication(rightSide) || "1";
      return (parseFloat(leftCalc) * parseFloat(rightCalc) || 1).toString();
    }
  }
  function handleAddition(
    inputStr: string,
    // divisionCount: number,
    // multiplyCount: number,
    // additionCount: number,
    // subtractionCount: number,
  ) {
    const inputStrArr = [];
    let currAdditionCount = 0;
    for (let i = 0; i < inputStr.length; i++) {
      inputStrArr.push(inputStr[i]);
      if (inputStr[i] === "+") {
        currAdditionCount++;
      }
    }
    let leftSide = "";
    let rightSide = "";
    if (currAdditionCount === 0) {
      return inputStr;
    } else if (currAdditionCount === 1) {
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(0, inputStr.indexOf("+"));
      rightSide = inputStr.slice(inputStr.indexOf("+") + 1);
      const leftCalc = parseFloat(leftSide);
      const rightCalc = parseFloat(rightSide);
      const outputString: string = (leftCalc + rightCalc).toString();
      if (outputString === "NaN") {
        return leftCalc.toString();
      } else {
        return outputString;
      }
    } else if (currAdditionCount > 1) {
      const halfAddCount = Math.ceil(currAdditionCount / 2);
      let leftEndIndex = 0;
      let j = 0;
      for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] != "+") {
          leftSide += inputStr[i];
        } else {
          if (j < halfAddCount) {
            j++;
            leftSide += "+";
          } else if (j === halfAddCount) {
            leftEndIndex = i;
            i = inputStr.length;
          }
        }
      }
      rightSide = inputStr.slice(leftEndIndex + 1);

      const leftCalc: string = handleMultiplication(leftSide) || "0";
      const rightCalc: string = handleMultiplication(rightSide) || "0";
      return (parseFloat(leftCalc) + parseFloat(rightCalc) || 1).toString();
    }
  }
  function handleSubtraction(
    inputStr: string,
    // divisionCount: number,
    // multiplyCount: number,
    // additionCount: number,
    // subtractionCount: number,
  ) {
    const inputStrArr = [];
    let currSubtractionCount = 0;
    for (let i = 0; i < inputStr.length; i++) {
      inputStrArr.push(inputStr[i]);
      if (inputStr[i] === "-") {
        currSubtractionCount++;
      }
    }
    let leftSide = "";
    let rightSide = "";
    if (currSubtractionCount === 0) {
      return inputStr;
    } else if (currSubtractionCount === 1) {
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(0, inputStr.indexOf("-"));
      rightSide = inputStr.slice(inputStr.indexOf("-") + 1);
      const leftCalc = parseFloat(leftSide);
      const rightCalc = parseFloat(rightSide);
      const outputString: string = (leftCalc - rightCalc).toString();
      if (outputString === "NaN") {
        return leftCalc.toString();
      } else {
        return outputString;
      }
    } else if (currSubtractionCount > 1) {
      const halfSubtractCount = Math.ceil(currSubtractionCount / 2);
      let leftEndIndex = 0;
      let j = 0;
      for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] != "-") {
          leftSide += inputStr[i];
        } else {
          if (j < halfSubtractCount) {
            j++;
            leftSide += "-";
          } else if (j === halfSubtractCount) {
            leftEndIndex = i;
            i = inputStr.length;
          }
        }
      }
      rightSide = inputStr.slice(leftEndIndex + 1);

      const leftCalc: string = handleMultiplication(leftSide) || "0";
      const rightCalc: string = handleMultiplication(rightSide) || "0";
      return (parseFloat(leftCalc) - parseFloat(rightCalc) || 1).toString();
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
