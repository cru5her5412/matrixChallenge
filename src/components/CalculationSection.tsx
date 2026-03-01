import {
  addMatrix,
  matrixMultiplication,
  matrixDeterminant,
  matrixInverse,
  matrixTrace,
  createRotationMatrix,
  rotateMatrix,
  subtractMatrix,
} from "./matrixChallenge.ts";
import displayStyles from "./CalculatorDisplay.module.css";
import type { ReactNode } from "react";
//todo: add ability to have multiple calculations and swap between adding matrices to them
export default function CalculationSection({
  DisplayInput,
  calcA,
  calcB,
  calcC,
  calcD,
  calcE,
  calcF,
  displayMatrix,
  index,
}: {
  DisplayInput: string[];
  calcA: number[][];
  calcB: number[][];
  calcC: number[][];
  calcD: number[][];
  calcE: number[][];
  calcF: number[][];
  displayMatrix: (matrix: string[][]) => ReactNode;
  index: number;
}) {
  function revertMatricesToStringFormat(A: number[][]) {
    const tempMatrix: string[][] = [];
    if (tempMatrix.length < A.length) {
      for (let i = 0; i < A.length; i++) {
        tempMatrix.push([]);
      }
    }
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        tempMatrix[i][j] = String(A[i][j]);
      }
    }
    return tempMatrix;
  }
  let firstInputMatrix: number[][];
  let secondInputMatrix: number[][];
  let firstCalcStringMatrix: string[][];
  let secondCalcStringMatrix: string[][];
  let calculatedMatrix: number[][];
  let outputMatrix: string[][] = [
    ["0", "0"],
    ["0", "0"],
  ];
  console.log(DisplayInput[0]);
  switch (DisplayInput[0]) {
    case "A":
      firstInputMatrix = calcA;
      firstCalcStringMatrix = revertMatricesToStringFormat(calcA);

      break;
    case "B":
      firstInputMatrix = calcB;
      firstCalcStringMatrix = revertMatricesToStringFormat(calcB);

      break;
    case "C":
      firstInputMatrix = calcC;
      firstCalcStringMatrix = revertMatricesToStringFormat(calcC);

      break;
    case "D":
      firstInputMatrix = calcD;
      firstCalcStringMatrix = revertMatricesToStringFormat(calcD);

      break;
    case "E":
      firstInputMatrix = calcE;
      firstCalcStringMatrix = revertMatricesToStringFormat(calcE);

      break;
    case "F":
      firstInputMatrix = calcF;
      firstCalcStringMatrix = revertMatricesToStringFormat(calcF);

      break;
    default:
      firstInputMatrix = calcA;
      firstCalcStringMatrix = revertMatricesToStringFormat(calcA);

      break;
  }
  switch (DisplayInput[1]) {
    case "A":
      secondInputMatrix = calcA;
      secondCalcStringMatrix = revertMatricesToStringFormat(calcA);
      break;
    case "B":
      secondInputMatrix = calcB;
      secondCalcStringMatrix = revertMatricesToStringFormat(calcB);
      break;
    case "C":
      secondInputMatrix = calcC;
      secondCalcStringMatrix = revertMatricesToStringFormat(calcC);
      break;
    case "D":
      secondInputMatrix = calcD;
      secondCalcStringMatrix = revertMatricesToStringFormat(calcD);
      break;
    case "E":
      secondInputMatrix = calcE;
      secondCalcStringMatrix = revertMatricesToStringFormat(calcE);
      break;
    case "F":
      secondInputMatrix = calcF;
      secondCalcStringMatrix = revertMatricesToStringFormat(calcF);
      break;
    default:
      secondInputMatrix = calcA;
      secondCalcStringMatrix = revertMatricesToStringFormat(calcA);
      break;
  }
  switch (DisplayInput[2]) {
    case "+":
      calculatedMatrix = addMatrix(firstInputMatrix, secondInputMatrix);
      outputMatrix = revertMatricesToStringFormat(calculatedMatrix);
      console.log(outputMatrix);
      break;
    case "-":
      calculatedMatrix = subtractMatrix(firstInputMatrix, secondInputMatrix);
      outputMatrix = revertMatricesToStringFormat(calculatedMatrix);
      break;
    case "x":
      calculatedMatrix = matrixMultiplication(
        firstInputMatrix,
        secondInputMatrix,
        3,
      );
      outputMatrix = revertMatricesToStringFormat(calculatedMatrix);
      break;
    default:
      outputMatrix = [
        ["0", "0"],
        ["0", "0"],
      ];
      break;
  }

  return (
    <section className={displayStyles.calculatorDisplaySection}>
      {displayMatrix(firstCalcStringMatrix)}
      <h1>{DisplayInput[2]}</h1>
      {displayMatrix(secondCalcStringMatrix)}
      <h1>=</h1>
      {displayMatrix(outputMatrix)}
    </section>
  );
}
