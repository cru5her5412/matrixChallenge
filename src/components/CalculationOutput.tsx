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
  let answer: string = textAreaContent[calculationID];
  let stringAsArray = [];
  let operatorCount = 0;
  let additionCount = 0;
  let subtractionCount = 0;
  let multiplyCount = 0;
  let divisionCount = 0;
  const matrixNames = ["A", "B", "C", "D", "E", "F"];
  function splitString(inputStr: string, char: string) {
    const splitArr = [];
    let totalCharCount = 0;
    let leftSide = "";
    let rightSide = "";
    for (let i = 0; i < inputStr.length; i++) {
      if (inputStr[i] === char) {
        totalCharCount++;
      }
      if (totalCharCount === 0) {
        return [inputStr];
      } else if (totalCharCount === 1) {
        leftSide = inputStr.slice(0, inputStr.indexOf(char));
        rightSide = inputStr.slice(inputStr.indexOf(char) + 1);
        return [leftSide, rightSide];
      } else if (totalCharCount > 1) {
        const halfCharCount = Math.ceil(totalCharCount / 2);
        let leftEndIndex = 0;
        let j = 0;
        for (let i = 0; i < inputStr.length; i++) {
          if (inputStr[i] != char) {
            leftSide += inputStr[i];
          } else {
            if (j < halfCharCount) {
              j++;
              leftSide += char;
            } else if (j === halfCharCount) {
              leftEndIndex = i;
              i = inputStr.length;
            }
          }
        }
        rightSide = inputStr.slice(leftEndIndex + 1);
      }
    }
    return [leftSide, rightSide];
  }
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
        answer =
          handleDivision(
            textAreaContent[calculationID],
            divisionCount,
            multiplyCount,
            additionCount,
            subtractionCount,
          ) || "";
      }
      if (multiplyCount > 0) {
        answer =
          handleMultiplication(
            textAreaContent[calculationID],
            divisionCount,
            multiplyCount,
            additionCount,
            subtractionCount,
          ) || "";
      }

      if (additionCount > 0) {
        answer =
          handleAddition(
            textAreaContent[calculationID],
            divisionCount,
            multiplyCount,
            additionCount,
            subtractionCount,
          ) || "";
      }
      if (subtractionCount > 0) {
        answer =
          handleSubtraction(
            textAreaContent[calculationID],
            divisionCount,
            multiplyCount,
            additionCount,
            subtractionCount,
          ) || "";
      }
    }
  }
  function handleMultiplication(
    inputStr: string,
    divisionCount: number,
    multiplyCount: number,
    additionCount: number,
    subtractionCount: number,
  ) {
    let leftSide = "";
    let rightSide = "";
    if (multiplyCount === 0) {
      return inputStr;
    } else if (multiplyCount === 1) {
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(0, inputStr.indexOf("x"));
      rightSide = inputStr.slice(inputStr.indexOf("x") + 1);
      const leftCalc = parseFloat(leftSide);
      const rightCalc = parseFloat(rightSide);
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
        handleMultiplication(
          leftSide,
          divisionCount,
          multiplyCount,
          additionCount,
          subtractionCount,
        ) || parseFloat(rightSide).toString();
      const rightCalc: string =
        handleMultiplication(
          rightSide,
          divisionCount,
          multiplyCount,
          additionCount,
          subtractionCount,
        ) || parseFloat(rightSide).toString();
      return (parseFloat(leftCalc) * parseFloat(rightCalc) || 1).toString();
    }
  }
  function handleAddition(
    inputStr: string,
    divisionCount: number,
    multiplyCount: number,
    additionCount: number,
    subtractionCount: number,
  ) {
    let leftSide = "";
    let rightSide = "";
    if (additionCount === 0) {
      return inputStr;
    } else if (additionCount === 1) {
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
    } else if (additionCount > 1) {
      const halfAdditionCount = Math.ceil(additionCount / 2);
      let leftEndIndex = 0;
      let j = 0;
      for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] != "+") {
          leftSide += inputStr[i];
        } else {
          if (j < halfAdditionCount) {
            j++;
            leftSide += "+";
          } else if (j === halfAdditionCount) {
            leftEndIndex = i;
            i = inputStr.length;
          }
        }
      }
      rightSide = inputStr.slice(leftEndIndex + 1);

      const leftCalc: string =
        handleAddition(
          leftSide,
          divisionCount,
          multiplyCount,
          additionCount,
          subtractionCount,
        ) || parseFloat(rightSide).toString();
      const rightCalc: string =
        handleAddition(
          rightSide,
          divisionCount,
          multiplyCount,
          additionCount,
          subtractionCount,
        ) || parseFloat(rightSide).toString();

      return (parseFloat(leftCalc) + parseFloat(rightCalc)).toString();
    }
  }
  function handleSubtraction(
    inputStr: string,
    divisionCount: number,
    multiplyCount: number,
    additionCount: number,
    subtractionCount: number,
  ) {
    let leftSide = "";
    let rightSide = "";
    if (subtractionCount === 0) {
      return inputStr;
    } else if (subtractionCount === 1) {
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
    } else if (subtractionCount > 1) {
      const halfSubtractionCount = Math.ceil(subtractionCount / 2);
      let leftEndIndex = 0;
      let j = 0;
      for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] != "-") {
          leftSide += inputStr[i];
        } else {
          if (j < halfSubtractionCount) {
            j++;
            leftSide += "-";
          } else if (j === halfSubtractionCount) {
            leftEndIndex = i;
            i = inputStr.length;
          }
        }
      }
      rightSide = inputStr.slice(leftEndIndex + 1);

      const leftCalc: string =
        handleSubtraction(
          leftSide,
          divisionCount,
          multiplyCount,
          additionCount,
          subtractionCount,
        ) || parseFloat(rightSide).toString();
      const rightCalc: string =
        handleSubtraction(
          rightSide,
          divisionCount,
          multiplyCount,
          additionCount,
          subtractionCount,
        ) || parseFloat(rightSide).toString();

      return (parseFloat(leftCalc) - parseFloat(rightCalc)).toString();
    }
  }
  function handleDivision(
    inputStr: string,
    divisionCount: number,
    multiplyCount: number,
    additionCount: number,
    subtractionCount: number,
  ) {
    let leftSide = "";
    let rightSide = "";
    if (divisionCount === 0) {
      return inputStr;
    } else if (divisionCount === 1) {
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
        handleDivision(
          leftSide,
          divisionCount,
          multiplyCount,
          additionCount,
          subtractionCount,
        ) || parseFloat(rightSide).toString();
      let rightCalc: string =
        handleDivision(
          rightSide,
          divisionCount,
          multiplyCount,
          additionCount,
          subtractionCount,
        ) || parseFloat(rightSide).toString();
      if (rightCalc === "0") {
        rightCalc = "1";
      }
      return (parseFloat(leftCalc) / parseFloat(rightCalc)).toString();
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
