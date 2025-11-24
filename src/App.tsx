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
//TODO: maybe add thing to remove e from input boxes(number so it can be input but it does nothing)
//TODO: make calculator functional (need to figure out exact functionality required and how to best implement it)
//TODO: create wireframes for basic UI/UX
import "./App.css";
import Keypad from "./components/Keypad.tsx";
import CalculatorDisplay from "./components/CalculatorDisplay.tsx";
export default function App() {
  const [AHidden, setAHidden] = useState(true);
  const [BHidden, setBHidden] = useState(true);
  const [CHidden, setCHidden] = useState(true);
  const [DHidden, setDHidden] = useState(true);
  const [EHidden, setEHidden] = useState(true);
  const [FHidden, setFHidden] = useState(true);
  const A: string[][] = [];
  const B: string[][] = [];
  const C: string[][] = [];
  const D: string[][] = [];
  const E: string[][] = [];
  const F: string[][] = [];
  createInitialMatrices(A);
  createInitialMatrices(B);
  createInitialMatrices(C);
  createInitialMatrices(D);
  createInitialMatrices(E);
  createInitialMatrices(F);

  function createInitialMatrices(I: string[][]) {
    for (let i = 0; i < 2; i++) {
      I.push([]);
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        I[i][j] = "0";
      }
    }
  }

  const [matrixA, setMatrixA] = useState([...A]);
  const [matrixB, setMatrixB] = useState([...B]);
  const [matrixC, setMatrixC] = useState([...C]);
  const [matrixD, setMatrixD] = useState([...D]);
  const [matrixE, setMatrixE] = useState([...E]);
  const [matrixF, setMatrixF] = useState([...F]);
  console.log(matrixA);
  console.log(matrixB);
  console.log(matrixC);
  console.log(matrixD);
  console.log(matrixE);
  console.log(matrixF);

  const inputA: number[][] = [];
  const inputB: number[][] = [];
  const inputC: number[][] = [];
  const inputD: number[][] = [];
  const inputE: number[][] = [];
  const inputF: number[][] = [];
  createInputMatrices(matrixA, inputA);
  createInputMatrices(matrixB, inputB);
  createInputMatrices(matrixC, inputC);
  createInputMatrices(matrixD, inputD);
  createInputMatrices(matrixE, inputE);
  createInputMatrices(matrixF, inputF);
  console.log(inputA);
  console.log(inputB);
  console.log(inputC);
  console.log(inputD);
  console.log(inputE);
  console.log(inputF);
  function createInputMatrices(A: string[][], matrixOut: number[][]) {
    for (let i = 0; i < A.length; i++) {
      matrixOut.push([]);
    }
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        matrixOut[i][j] = Number(A[i][j]);
      }
    }
  }
  function displayMatrix(A: number[][]) {
    return (
      <div className="matrixDisplay">
        <div className="openBr"></div>
        <span>
          {A.map((row, indexR) => (
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
  function inputMatrix(A: string[][], matrixID: number) {
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
                      onChange={(e) => {
                        handleEditMatrix(
                          indexR,
                          indexC,
                          e.target.value,
                          [...A],
                          matrixID
                        );
                      }}
                      key={`col${indexC}row${indexR}`}
                      className={`row${indexR} col${indexC} input${matrixID}`}
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
            <button onClick={() => handleShrinkRows(A, matrixID)}>-</button>
            <button onClick={() => handleGrowRows(A, matrixID)}>+</button>
          </div>
          <div className="buttonCols">
            <h2>Columns</h2>
            <button onClick={() => handleShrinkCols(A, matrixID)}>-</button>
            <button onClick={() => handleGrowCols(A, matrixID)}>+</button>
          </div>
        </section>
      </section>
    );
  }
  function handleEditMatrix(
    row: number,
    col: number,
    value: string,
    A: string[][],
    matrixID: number
  ) {
    const tempMatrix: string[][] = [...A];
    tempMatrix[row][col] = value;
    console.log(tempMatrix);
    if (matrixID == 0) {
      setMatrixA(tempMatrix);
      console.log("A");
    } else if (matrixID == 1) {
      setMatrixB(tempMatrix);
      console.log("B");
    } else if (matrixID == 2) {
      setMatrixC(tempMatrix);
      console.log("C");
    } else if (matrixID == 3) {
      setMatrixD(tempMatrix);
      console.log("D");
    } else if (matrixID == 4) {
      setMatrixE(tempMatrix);
      console.log("E");
    } else if (matrixID == 5) {
      setMatrixF(tempMatrix);
      console.log("F");
    }
  }
  function handleShrinkRows(A: string[][], matrixID: number) {
    if (A.length > 2) {
      const tempMatrix = [...A];
      tempMatrix.splice(tempMatrix.length - 1, 1);
      if (matrixID == 0) {
        setMatrixA(tempMatrix);
      } else if (matrixID == 1) {
        setMatrixB(tempMatrix);
      } else if (matrixID == 2) {
        setMatrixC(tempMatrix);
      } else if (matrixID == 3) {
        setMatrixD(tempMatrix);
      } else if (matrixID == 4) {
        setMatrixE(tempMatrix);
      } else if (matrixID == 5) {
        setMatrixF(tempMatrix);
      }
    }
  }
  function handleGrowRows(A: string[][], matrixID: number) {
    if (A.length < 6) {
      const tempMatrix = [...A];
      tempMatrix.push([]);
      for (let i = 0; i < A[0].length; i++) {
        tempMatrix[tempMatrix.length - 1].push("0");
      }
      console.log(tempMatrix);
      if (matrixID == 0) {
        setMatrixA(tempMatrix);
      } else if (matrixID == 1) {
        setMatrixB(tempMatrix);
      } else if (matrixID == 2) {
        setMatrixC(tempMatrix);
      } else if (matrixID == 3) {
        setMatrixD(tempMatrix);
      } else if (matrixID == 4) {
        setMatrixE(tempMatrix);
      } else if (matrixID == 5) {
        setMatrixF(tempMatrix);
      }
    }
  }
  function handleShrinkCols(A: string[][], matrixID: number) {
    if (A[0].length > 2) {
      const tempMatrix = [...A];
      for (let i = 0; i < A.length; i++) {
        tempMatrix[i].splice(tempMatrix[i].length - 1, 1);
      }
      if (matrixID == 0) {
        setMatrixA(tempMatrix);
      } else if (matrixID == 1) {
        setMatrixB(tempMatrix);
      } else if (matrixID == 2) {
        setMatrixC(tempMatrix);
      } else if (matrixID == 3) {
        setMatrixD(tempMatrix);
      } else if (matrixID == 4) {
        setMatrixE(tempMatrix);
      } else if (matrixID == 5) {
        setMatrixF(tempMatrix);
      }
    }
  }
  function handleGrowCols(A: string[][], matrixID: number) {
    if (A[0].length < 6) {
      const tempMatrix = [...A];

      for (let i = 0; i < A.length; i++) {
        tempMatrix[i].push("0");
      }
      console.log(tempMatrix);
      if (matrixID == 0) {
        setMatrixA(tempMatrix);
      } else if (matrixID == 1) {
        setMatrixB(tempMatrix);
      } else if (matrixID == 2) {
        setMatrixC(tempMatrix);
      } else if (matrixID == 3) {
        setMatrixD(tempMatrix);
      } else if (matrixID == 4) {
        setMatrixE(tempMatrix);
      } else if (matrixID == 5) {
        setMatrixF(tempMatrix);
      }
    }
  }
  //Visible app here
  return (
    <>
      {/*
      <section>{displayMatrix(inputB)}</section>
      <section>{inputMatrix(matrixB, 1)}</section>
      <section>{displayMatrix(inputC)}</section>
      <section>{inputMatrix(matrixC, 2)}</section>
      <section>{displayMatrix(inputD)}</section>
      <section>{inputMatrix(matrixD, 3)}</section>
      <section>{displayMatrix(inputE)}</section>
      <section>{inputMatrix(matrixE, 4)}</section>*/}
      <section>{displayMatrix(inputF)}</section>
      <section>{inputMatrix(matrixF, 5)}</section>
      {/* <main>
        <CalculatorDisplay />
        <Keypad />
        <h2>calculator</h2>
        {AHidden ? (
          <section className="A">{displayMatrix(inputA)}</section>
        ) : null}
        <section className="calcButtons">
          <button onClick={() => setAHidden(!AHidden)}>A</button>
          <button onClick={() => setBHidden(!BHidden)}>B</button>
          <button onClick={() => setCHidden(!CHidden)}>C</button>
          <button onClick={() => setDHidden(!DHidden)}>D</button>
          <button onClick={() => setEHidden(!EHidden)}>E</button>
          <button onClick={() => setFHidden(!FHidden)}>F</button>
        </section>
        {AHidden ? (
          <section className="A">{inputMatrix(matrixA, 0)}</section>
        ) : null} 
      </main>*/}
    </>
  );
}
