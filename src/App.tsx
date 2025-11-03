import { useState } from "react";
import {
  addMatrix,
  matrixMultiplication,
  matrixDeterminant,
  matrixInverse,
  matrixTrace,
  createRotationMatrix,
  rotateMatrix,
  subtractMatrix,
} from "../matrixChallenge.ts";
import "./App.css";
export default function App() {
  let matARows = 4;
  let matACols = 4;
  let I: number[][] = [];
  for (let i = 0; i < matARows; i++) {
    I.push([]);
  }

  for (let i = 0; i < matARows; i++) {
    for (let j = 0; j < matACols; j++) {
      I[i][j] = 0;
    }
  }

  const [matrixA, setMatrixA] = useState(I);

  let emptyA: number[][] = [];
  for (let i = 0; i < matARows; i++) {
    let row = [];
    for (let j = 0; j < matACols; j++) {
      row.push(0);
    }
    emptyA.push(row);
  }
  console.log(emptyA);
  const inputA = [
    [1, 2, 1],
    [2, 1, 1],
    [2, 1, 2],
  ];
  const inputB = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2],
  ];
  const x = matrixMultiplication(inputA, inputB, 6);
  //console.log(matrixA);
  function displayMatrix(x: number[][]) {
    return x.map((row, indexR) => (
      <section key={indexR} className={`row${indexR}`}>
        {row.map((col, indexC) => {
          return (
            <p key={indexC} className={`row${indexR} col${indexC}`}>
              {col}
            </p>
          );
        })}
      </section>
    ));
  }
  function handleEditMatrix(row: number, col: number, value: string) {
    let tempMatrix: number[][] = matrixA;
    let val: string = String(tempMatrix[row][col]) + value;
    let valNum = Number(val);
    tempMatrix[row][col] = valNum;
    setMatrixA(tempMatrix);
    console.log(matrixA);
  }
  function handleShrinkRows() {
    if (matrixA.length > 2) {
      let tempMatrix = [...matrixA];
      tempMatrix.splice(tempMatrix.length - 1, 1);
      setMatrixA(tempMatrix);
    }
  }
  function handleGrowRows() {
    if (matrixA.length < 6) {
      let tempMatrix = [...matrixA];
      tempMatrix.push([]);
      for (let i = 0; i < matrixA[0].length; i++) {
        tempMatrix[tempMatrix.length - 1].push(0);
      }
      console.log(tempMatrix);
      setMatrixA(tempMatrix);
    }
  }
  function handleShrinkCols() {
    if (matrixA[0].length > 2) {
      let tempMatrix = [...matrixA];
      for (let i = 0; i < matrixA.length; i++) {
        tempMatrix[i].splice(tempMatrix[i].length - 1, 1);
      }
      setMatrixA(tempMatrix);
    }
  }
  function handleGrowCols() {
    if (matrixA[0].length < 6) {
      let tempMatrix = [...matrixA];

      for (let i = 0; i < matrixA.length; i++) {
        tempMatrix[i].push(0);
      }
      console.log(tempMatrix);
      setMatrixA(tempMatrix);
    }
  }
  return (
    <>
      <h1>Hi</h1>
      <main>
        <div className="openBr"></div>
        <section>{displayMatrix(x)}</section>
        <div className="closeBr"></div>
      </main>
      <section>
        {matrixA.map((row, indexR) => (
          <section key={indexR} className={`row${indexR}`}>
            {row.map((_, indexC) => {
              return (
                <input
                  onChange={(e) => {
                    handleEditMatrix(indexR, indexC, e.target.value);
                  }}
                  key={indexC}
                  className={`row${indexR} col${indexC}`}
                  value={matrixA[indexR][indexC]}
                />
              );
            })}
          </section>
        ))}
        <div className="buttonRows">
          <h2>Rows</h2>
          <button onClick={handleShrinkRows}>-</button>
          <button onClick={handleGrowRows}>+</button>
        </div>
        <div className="buttonCols">
          <h2>Columns</h2>
          <button onClick={handleShrinkCols}>-</button>
          <button onClick={handleGrowCols}>+</button>
        </div>
      </section>
    </>
  );
}
