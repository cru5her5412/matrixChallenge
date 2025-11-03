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
  const [matrixA, setMatrixA] = useState([
    [1, 0],
    [0, 1],
  ]);
  const matARows = 2;
  const matACols = 2;
  let emptyA = [];
  for (let i = 0; i < matARows; i++) {
    let row = [];
    for (let j = 0; j < matACols; j++) {
      row.push([]);
    }
    emptyA.push(row);
  }
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
    const valNum = Number(value);
    tempMatrix[row][col] = valNum;
    setMatrixA(tempMatrix);
    console.log(matrixA);
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
        {emptyA.map((row, indexR) => (
          <section key={indexR} className={`row${indexR}`}>
            {row.map((_, indexC) => {
              return (
                <input
                  onChange={(e) => {
                    handleEditMatrix(indexR, indexC, e.target.value);
                  }}
                  key={indexC}
                  className={`row${indexR} col${indexC}`}
                />
              );
            })}
          </section>
        ))}
      </section>
    </>
  );
}
