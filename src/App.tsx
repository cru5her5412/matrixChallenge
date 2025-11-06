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
//TODO: fix issues with matrixes overlapping when edited
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

  const [matrixA, setMatrixA] = useState([...I]);
  const [matrixB, setMatrixB] = useState([...I]);
  const [matrixC, setMatrixC] = useState([...I]);
  const [matrixD, setMatrixD] = useState([...I]);
  const [matrixE, setMatrixE] = useState([...I]);
  const [matrixF, setMatrixF] = useState([...I]);
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
        <span>
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
        </span>
        <div className="closeBr"></div>
      </div>
    );
  }
  function inputMatrix(A: string[][]) {
    return (
      <section>
        <section style={{ display: "inline-flex" }}>
          <div className="openBr"></div>
          <div>
            {A.map((row, indexR) => (
              <form key={indexR} className={`row${indexR}`}>
                {row.map((_, indexC) => {
                  return (
                    <input
                      type="number"
                      onSelect={() => console.log("hi")}
                      onChange={(e) => {
                        handleEditMatrix(indexR, indexC, e.target.value, A);
                      }}
                      key={`col${indexC}row${indexR}`}
                      className={`row${indexR} col${indexC} inputA`}
                      value={A[indexR][indexC]}
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
            <button onClick={() => handleShrinkRows(A)}>-</button>
            <button onClick={() => handleGrowRows(A)}>+</button>
          </div>
          <div className="buttonCols">
            <h2>Columns</h2>
            <button onClick={() => handleShrinkCols(A)}>-</button>
            <button onClick={() => handleGrowCols(A)}>+</button>
          </div>
        </section>
      </section>
    );
  }
  function handleEditMatrix(
    row: number,
    col: number,
    value: string,
    A: string[][]
  ) {
    const tempMatrix: string[][] = [...A];
    tempMatrix[row][col] = value;
    console.log(tempMatrix);
    if (A == matrixA) {
      setMatrixA(tempMatrix);
    } else if (A == matrixB) {
      setMatrixB(tempMatrix);
    } else if (A == matrixC) {
      setMatrixC(tempMatrix);
    } else if (A == matrixD) {
      setMatrixD(tempMatrix);
    } else if (A == matrixE) {
      setMatrixE(tempMatrix);
    } else if (A == matrixF) {
      setMatrixF(tempMatrix);
    }
  }
  function handleShrinkRows(A: string[][]) {
    if (A.length > 2) {
      const tempMatrix = [...A];
      tempMatrix.splice(tempMatrix.length - 1, 1);
      if (A == matrixA) {
        setMatrixA(tempMatrix);
      } else if (A == matrixB) {
        setMatrixB(tempMatrix);
      } else if (A == matrixC) {
        setMatrixC(tempMatrix);
      } else if (A == matrixD) {
        setMatrixD(tempMatrix);
      } else if (A == matrixE) {
        setMatrixE(tempMatrix);
      } else if (A == matrixF) {
        setMatrixF(tempMatrix);
      }
    }
  }
  function handleGrowRows(A: string[][]) {
    if (A.length < 6) {
      const tempMatrix = [...A];
      tempMatrix.push([]);
      for (let i = 0; i < A[0].length; i++) {
        tempMatrix[tempMatrix.length - 1].push("");
      }
      console.log(tempMatrix);
      if (A == matrixA) {
        setMatrixA(tempMatrix);
      } else if (A == matrixB) {
        setMatrixB(tempMatrix);
      } else if (A == matrixC) {
        setMatrixC(tempMatrix);
      } else if (A == matrixD) {
        setMatrixD(tempMatrix);
      } else if (A == matrixE) {
        setMatrixE(tempMatrix);
      } else if (A == matrixF) {
        setMatrixF(tempMatrix);
      }
    }
  }
  function handleShrinkCols(A: string[][]) {
    if (A[0].length > 2) {
      const tempMatrix = [...A];
      for (let i = 0; i < A.length; i++) {
        tempMatrix[i].splice(tempMatrix[i].length - 1, 1);
      }
      if (A == matrixA) {
        setMatrixA(tempMatrix);
      } else if (A == matrixB) {
        setMatrixB(tempMatrix);
      } else if (A == matrixC) {
        setMatrixC(tempMatrix);
      } else if (A == matrixD) {
        setMatrixD(tempMatrix);
      } else if (A == matrixE) {
        setMatrixE(tempMatrix);
      } else if (A == matrixF) {
        setMatrixF(tempMatrix);
      }
    }
  }
  function handleGrowCols(A: string[][]) {
    if (A[0].length < 6) {
      const tempMatrix = [...A];

      for (let i = 0; i < A.length; i++) {
        tempMatrix[i].push("");
      }
      console.log(tempMatrix);
      if (A == matrixA) {
        setMatrixA(tempMatrix);
      } else if (A == matrixB) {
        setMatrixB(tempMatrix);
      } else if (A == matrixC) {
        setMatrixC(tempMatrix);
      } else if (A == matrixD) {
        setMatrixD(tempMatrix);
      } else if (A == matrixE) {
        setMatrixE(tempMatrix);
      } else if (A == matrixF) {
        setMatrixF(tempMatrix);
      }
    }
  }
  return (
    <>
      <h1>Hi</h1>
      <main>
        <section>{displayMatrix(inputA)}</section>
      </main>
      <section>{inputMatrix(matrixA)}</section>
      <section>{inputMatrix(matrixB)}</section>
      <section>{inputMatrix(matrixC)}</section>
      <section>{inputMatrix(matrixD)}</section>
      <section>{inputMatrix(matrixE)}</section>
      <section>{inputMatrix(matrixF)}</section>
    </>
  );
}
