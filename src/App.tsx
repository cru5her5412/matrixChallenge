import { useEffect, useState } from "react";
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
  const matARows = 2;
  const matACols = 2;
  const I: string[][] = [];
  for (let i = 0; i < matARows; i++) {
    I.push([]);
  }

  for (let i = 0; i < matARows; i++) {
    for (let j = 0; j < matACols; j++) {
      I[i][j] = "";
    }
  }

  const [matrixA, setMatrixA] = useState(I);
  const [matrixB, setMatrixB] = useState(I);
  const [matrixC, setMatrixC] = useState(I);
  const [matrixD, setMatrixD] = useState(I);
  const [matrixE, setMatrixE] = useState(I);
  const [matrixF, setMatrixF] = useState(I);
  const inputA: number[][] = [];
  for (let i = 0; i < matrixA.length; i++) {
    inputA.push([]);
  }
  for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixA[0].length; j++) {
      inputA[i][j] = Number(matrixA[i][j]);
    }
  }
  console.log(inputA);

  function displayMatrix(x: number[][]) {
    return (
      <div className="matrixDisplay">
        <div className="openBr"></div>
        <p>
          {x.map((row, indexR) => (
            <section key={indexR} className={`row${indexR}`}>
              {row.map((col, indexC) => {
                return (
                  <p key={indexC} className={`row${indexR} col${indexC}`}>
                    {col}
                  </p>
                );
              })}
            </section>
          ))}
        </p>
        <div className="closeBr"></div>
      </div>
    );
  }
  function inputMatrix() {
    return (
      <section>
        <section style={{ display: "inline-flex" }}>
          <div className="openBr"></div>
          <div>
            {matrixA.map((row, indexR) => (
              <form key={indexR} className={`row${indexR}`}>
                {row.map((_, indexC) => {
                  return (
                    <input
                      type="number"
                      onSelect={() => console.log("hi")}
                      onChange={(e) => {
                        handleEditMatrix(indexR, indexC, e.target.value);
                      }}
                      key={`col${indexC}row${indexR}`}
                      className={`row${indexR} col${indexC} inputA`}
                      value={matrixA[indexR][indexC]}
                    />
                  );
                })}
              </form>
            ))}
          </div>

          <div className="closeBr"></div>
        </section>
        <section className="buttonSection">
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
      </section>
    );
  }
  function handleEditMatrix(row: number, col: number, value: string) {
    const tempMatrix: string[][] = [...matrixA];
    tempMatrix[row][col] = value;
    console.log(tempMatrix);
    setMatrixA(tempMatrix);
  }
  function handleShrinkRows() {
    if (matrixA.length > 2) {
      const tempMatrix = [...matrixA];
      tempMatrix.splice(tempMatrix.length - 1, 1);
      setMatrixA(tempMatrix);
    }
  }
  function handleGrowRows() {
    if (matrixA.length < 6) {
      const tempMatrix = [...matrixA];
      tempMatrix.push([]);
      for (let i = 0; i < matrixA[0].length; i++) {
        tempMatrix[tempMatrix.length - 1].push("");
      }
      console.log(tempMatrix);
      setMatrixA(tempMatrix);
    }
  }
  function handleShrinkCols() {
    if (matrixA[0].length > 2) {
      const tempMatrix = [...matrixA];
      for (let i = 0; i < matrixA.length; i++) {
        tempMatrix[i].splice(tempMatrix[i].length - 1, 1);
      }
      setMatrixA(tempMatrix);
    }
  }
  function handleGrowCols() {
    if (matrixA[0].length < 6) {
      const tempMatrix = [...matrixA];

      for (let i = 0; i < matrixA.length; i++) {
        tempMatrix[i].push("");
      }
      console.log(tempMatrix);
      setMatrixA(tempMatrix);
    }
  }
  return (
    <>
      <h1>Hi</h1>
      <main>
        <section>{displayMatrix(inputA)}</section>
      </main>
      <section>{inputMatrix()}</section>
    </>
  );
}
