import type { Dispatch, SetStateAction } from "react";
import displayStyles from "./CalculatorDisplay.module.css";
import { matrixCalculator } from "./matrixCalculator";
import displayMatrix from "./displayMatrix";
import { matrixMultiplication } from "./matrixChallenge";
export default function CalculationOutput({
  className,
  textAreaContent,
  setTextAreaContent,
  activeCalculationCount,
  setActiveCalculationCount,
  calculationID,
  matrixA,
  matrixB,
  matrixC,
  matrixD,
  matrixE,
  matrixF,
}: {
  className: string;
  textAreaContent: string[];
  setTextAreaContent: Dispatch<SetStateAction<string[]>>;
  activeCalculationCount: number;
  setActiveCalculationCount: Dispatch<SetStateAction<number>>;
  calculationID: number;
  matrixA: string[][];
  matrixB: string[][];
  matrixC: string[][];
  matrixD: string[][];
  matrixE: string[][];
  matrixF: string[][];
}) {
  let answer: string | string[][] = "";
  let stringAsArray = [];
  let operatorCount = 0;
  let additionCount = 0;
  let subtractionCount = 0;
  let multiplyCount = 0;
  let divisionCount = 0;
  const matrixNames = ["A", "B", "C", "D", "E", "F"];
  const validNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
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
      let startOfNum = inputStr.indexOf("/") - 1;
      for (let x = inputStr.indexOf("/") - 1; x > 0; x--) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStr[x]) {
            startOfNum--;
            positionChanged = true;
          }
        }
        if (positionChanged === false) {
          x = -1;
        }
      }

      let endOfNum = inputStr.indexOf("/") + 1;
      for (let x = inputStr.indexOf("/") + 1; x < inputStr.length; x++) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStrArr[x]) {
            endOfNum++;
            positionChanged = true;
            x++;
          }
        }
        if (positionChanged === false) {
          x = inputStr.length;
        }
      }
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(startOfNum, inputStr.indexOf("/"));
      rightSide = inputStr.slice(inputStr.indexOf("/") + 1, endOfNum + 1);
      const leftCalc = parseFloat(leftSide);
      const rightCalc = parseFloat(rightSide);
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
    const presentMatrix = [];
    let matrixPresent = false;
    for (let j = 0; j < inputStr.length; j++) {
      for (let i = 0; i < matrixNames.length; i++) {
        if (inputStr[j] === matrixNames[i]) {
          matrixPresent = true;
          presentMatrix.push(inputStr[j]);
          j++;
        }
      }
    }
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
    } else if (currMultiplyCount === 1 && !matrixPresent) {
      let startOfNum = inputStr.indexOf("x") - 1;
      for (let x = inputStr.indexOf("x") - 1; x > 0; x--) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStr[x]) {
            startOfNum--;
            positionChanged = true;
          }
        }
        if (positionChanged === false) {
          x = -1;
        }
      }

      let endOfNum = inputStr.indexOf("x") + 1;
      for (let x = inputStr.indexOf("x") + 1; x < inputStr.length; x++) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStrArr[x]) {
            endOfNum++;
            positionChanged = true;
            x++;
          }
        }
        if (positionChanged === false) {
          x = inputStr.length;
        }
      }
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(startOfNum, inputStr.indexOf("x"));
      rightSide = inputStr.slice(inputStr.indexOf("x") + 1, endOfNum + 1);
      const leftCalc = parseFloat(leftSide);
      const rightCalc = parseFloat(rightSide);
      const outputString: string = (leftCalc * rightCalc).toString();
      if (outputString === "NaN") {
        return leftCalc.toString();
      } else {
        return outputString;
      }
    } else if (currMultiplyCount > 1 && !matrixPresent) {
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
    } else if (currMultiplyCount === 1 && matrixPresent) {
      let startOfNum = inputStr.indexOf("x") - 1;
      for (let x = inputStr.indexOf("x") - 1; x > 0; x--) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStr[x]) {
            startOfNum--;
            positionChanged = true;
          }
        }
        if (positionChanged === false) {
          x = -1;
        }
      }

      let endOfNum = inputStr.indexOf("x") + 1;
      for (let x = inputStr.indexOf("x") + 1; x < inputStr.length; x++) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStrArr[x]) {
            endOfNum++;
            positionChanged = true;
            x++;
          }
        }
        if (positionChanged === false) {
          x = inputStr.length;
        }
      }
      leftSide = inputStr.slice(startOfNum, inputStr.indexOf("x"));
      rightSide = inputStr.slice(inputStr.indexOf("x") + 1, endOfNum + 1);
      let currentMatrixL: string = "";
      let leftMatrix = false;
      for (let i = 0; i < leftSide.length; i++) {
        for (let j = 0; j < matrixNames.length; j++) {
          if (leftSide.includes(matrixNames[j])) {
            currentMatrixL = matrixNames[j];
            leftMatrix = true;

            i = leftSide.length;
          }
        }
      }
      let currentMatrixR: string = "";
      let rightMatrix = false;
      for (let i = 0; i < leftSide.length; i++) {
        for (let j = 0; j < matrixNames.length; j++) {
          if (leftSide.includes(matrixNames[j])) {
            currentMatrixR = matrixNames[j];
            rightMatrix = true;

            i = leftSide.length;
          }
        }
      }
      /*if (leftMatrix === false && rightMatrix === false) {
        const leftCalc = parseFloat(leftSide);
        const leftCalc = parseFloat(leftSide);

      } else*/ if (leftMatrix === false && rightMatrix === true) {
        const matrixNo = matrixNames.indexOf(currentMatrixR) + 1;
        let rightCalc: string[][] = [];
        switch (matrixNo) {
          case 1:
            rightCalc = matrixA;
            break;
          case 2:
            rightCalc = matrixB;
            break;
          case 3:
            rightCalc = matrixC;
            break;
          case 4:
            rightCalc = matrixD;
            break;
          case 5:
            rightCalc = matrixE;
            break;
          case 6:
            rightCalc = matrixF;
            break;
          default:
            rightCalc = matrixA;
            break;
        }
        return matrixCalculator(
          rightCalc,
          [[""], [""]],
          parseFloat(leftSide),
          "DEGREE",
          "matrixNumberMultiplication",
        );
      } else if (leftMatrix === true && rightMatrix === false) {
        const matrixNo = matrixNames.indexOf(currentMatrixL) + 1;
        let leftCalc: string[][];
        switch (matrixNo) {
          case 1:
            leftCalc = matrixA;
            break;
          case 2:
            leftCalc = matrixB;
            break;
          case 3:
            leftCalc = matrixC;
            break;
          case 4:
            leftCalc = matrixD;
            break;
          case 5:
            leftCalc = matrixE;
            break;
          case 6:
            leftCalc = matrixF;
            break;
          default:
            leftCalc = matrixA;
            break;
        }
        return matrixCalculator(
          leftCalc,
          [[""], [""]],
          parseFloat(rightSide),
          "DEGREE",
          "matrixNumberMultiplication",
        );
      } else if (leftMatrix === true && rightMatrix === true) {
        const matrixNo = matrixNames.indexOf(currentMatrixR) + 1;
        let leftCalc: string[][];
        let rightCalc: string[][];
        switch (matrixNo) {
          case 1:
            leftCalc = matrixA;
            break;
          case 2:
            leftCalc = matrixB;
            break;
          case 3:
            leftCalc = matrixC;
            break;
          case 4:
            leftCalc = matrixD;
            break;
          case 5:
            leftCalc = matrixE;
            break;
          case 6:
            leftCalc = matrixF;
            break;
          default:
            leftCalc = matrixA;
            break;
        }
        switch (matrixNo) {
          case 1:
            rightCalc = matrixA;
            break;
          case 2:
            rightCalc = matrixB;
            break;
          case 3:
            rightCalc = matrixC;
            break;
          case 4:
            rightCalc = matrixD;
            break;
          case 5:
            rightCalc = matrixE;
            break;
          case 6:
            rightCalc = matrixF;
            break;
          default:
            rightCalc = matrixA;
            break;
        }
        return matrixCalculator(
          leftCalc,
          rightCalc,
          0,
          "DEGREE",
          "matrixMultiplication",
        );
      }
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
      let startOfNum = inputStr.indexOf("+") - 1;
      for (let x = inputStr.indexOf("+") - 1; x > 0; x--) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStr[x]) {
            startOfNum--;
            positionChanged = true;
          }
        }
        if (positionChanged === false) {
          x = -1;
        }
      }

      let endOfNum = inputStr.indexOf("+") + 1;
      for (let x = inputStr.indexOf("+") + 1; x < inputStr.length; x++) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStrArr[x]) {
            endOfNum++;
            positionChanged = true;
            x++;
          }
        }
        if (positionChanged === false) {
          x = inputStr.length;
        }
      }
      /*
      let presentMatrix = []
      let matrixPresent=false
      for (let j = 0;j<inputStr.length;j++){ 
      for (let i = 0; i < matrixNames.length; i++) {
      if(inputStr[j]===matrixNames[i]){
      matrixPresent = true
      presentMatrix.push(inputstr[j])
      j++;
      }
      }
      }*/
      leftSide = inputStr.slice(startOfNum, inputStr.indexOf("+"));
      rightSide = inputStr.slice(inputStr.indexOf("+") + 1, endOfNum + 1);
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

      const leftCalc: string = handleAddition(leftSide) || "0";
      const rightCalc: string = handleAddition(rightSide) || "0";
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
      let startOfNum = inputStr.indexOf("-") - 1;
      for (let x = inputStr.indexOf("-") - 1; x > 0; x--) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStr[x]) {
            startOfNum--;
            positionChanged = true;
          }
        }
        if (positionChanged === false) {
          x = -1;
        }
      }

      let endOfNum = inputStr.indexOf("-") + 1;
      for (let x = inputStr.indexOf("-") + 1; x < inputStr.length; x++) {
        let positionChanged = false;
        for (let j = 0; j < validNumbers.length; j++) {
          if (validNumbers[j] === inputStrArr[x]) {
            endOfNum++;
            positionChanged = true;
            x++;
          }
        }
        if (positionChanged === false) {
          x = inputStr.length;
        }
      }
      // for (let i = 0; i < matrixNames.length; i++) {}
      leftSide = inputStr.slice(startOfNum, inputStr.indexOf("-"));
      rightSide = inputStr.slice(inputStr.indexOf("-") + 1, endOfNum + 1);
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

      const leftCalc: string = handleSubtraction(leftSide) || "0";
      const rightCalc: string = handleSubtraction(rightSide) || "0";
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

        {typeof answer === "string" ? answer : displayMatrix(answer)}
        {/* 
        {stringAsArray.toString()} */}
      </section>
    </>
  );
}
