import {
  addMatrix,
  matrixMultiplication,
  matrixDeterminant,
  matrixInverse,
  matrixTrace,
  createRotationMatrix,
  rotateMatrix,
  subtractMatrix,
  multiplicationNumberMatrix,
} from "./matrixChallenge.ts";
export function matrixCalculator(
  Matrix1: string[][],
  Matrix2: string[][],
  num1: number,
  angleMode: "DEGREE" | "RADIAN",
  operation:
    | "matrixMultiplication"
    | "multiplicationNumberMatrix"
    | "matrixDeterminant"
    | "matrixInverse"
    | "matrixTrace"
    | "createRotationMatrix"
    | "rotateMatrix"
    | "addMatrix"
    | "subtractMatrix",
) {
  let endValue: string[][] | number | string;
  const calcMatrix1 = Matrix1.map((row) => row.map((value) => Number(value)));
  const calcMatrix2 = Matrix2.map((row) => row.map((value) => Number(value)));
  if (operation === "matrixMultiplication") {
    endValue = matrixMultiplication(calcMatrix1, calcMatrix2, 2).map((row) =>
      row.map((value) => value.toString()),
    );
  } else if (operation === "multiplicationNumberMatrix") {
    endValue = multiplicationNumberMatrix(calcMatrix1, num1).map((row) =>
      row.map((value) => value.toString()),
    );
  } else if (operation === "matrixDeterminant") {
    endValue = matrixDeterminant(calcMatrix1);
  } else if (operation === "matrixInverse") {
    endValue = matrixInverse(calcMatrix1, 2).map((row) =>
      row.map((value) => value.toString()),
    );
  } else if (operation === "matrixTrace") {
    endValue = matrixTrace(calcMatrix1);
  } else if (operation === "createRotationMatrix") {
    endValue = createRotationMatrix(num1, angleMode).map((row) =>
      row.map((value) => value.toString()),
    );
  } else if (operation === "rotateMatrix") {
    endValue = rotateMatrix(num1, calcMatrix1, angleMode).map((row) =>
      row.map((value) => value.toString()),
    );
  } else if (operation === "addMatrix") {
    endValue = addMatrix(calcMatrix1, calcMatrix2).map((row) =>
      row.map((value) => value.toString()),
    );
  } else if (operation === "subtractMatrix") {
    endValue = subtractMatrix(calcMatrix1, calcMatrix2).map((row) =>
      row.map((value) => value.toString()),
    );
  } else {
    endValue = "Error: operation not recognised";
  }
  return endValue;
}
