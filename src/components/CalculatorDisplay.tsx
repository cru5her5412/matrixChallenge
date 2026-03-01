import { useState, type Dispatch, type SetStateAction } from "react";
import displayStyles from "./CalculatorDisplay.module.css";
import matrixDisplayStyles from "./MatrixDisplay.module.css";

import InputMatrix from "./InputMatrix";
export default function CalculatorDisplay({
  matrixA,
  setMatrixA,
  AHidden,
  matrixB,
  setMatrixB,
  BHidden,
  matrixC,
  setMatrixC,
  CHidden,
  matrixD,
  setMatrixD,
  DHidden,
  matrixE,
  setMatrixE,
  EHidden,
  matrixF,
  setMatrixF,
  FHidden,
  DisplayInput,
}: {
  matrixA: string[][];
  setMatrixA: Dispatch<SetStateAction<string[][]>>;
  AHidden: boolean;
  matrixB: string[][];
  setMatrixB: Dispatch<SetStateAction<string[][]>>;
  BHidden: boolean;
  matrixC: string[][];
  setMatrixC: Dispatch<SetStateAction<string[][]>>;
  CHidden: boolean;
  matrixD: string[][];
  setMatrixD: Dispatch<SetStateAction<string[][]>>;
  DHidden: boolean;
  matrixE: string[][];
  setMatrixE: Dispatch<SetStateAction<string[][]>>;
  EHidden: boolean;
  matrixF: string[][];
  setMatrixF: Dispatch<SetStateAction<string[][]>>;
  FHidden: boolean;
  DisplayInput: Array<string>;
}) {
  function displayMatrix(matrix: string[][]) {
    return (
      <div className="matrixDisplay">
        <div className="openBr"></div>
        <span className={matrixDisplayStyles.matrixPart}>
          {matrix.map((row, indexR) => (
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
  const matrixAHeight = (matrixA.length - 2) * 30 + 120;
  const matrixBHeight = (matrixB.length - 2) * 30 + 120;
  const matrixCHeight = (matrixC.length - 2) * 30 + 120;
  const matrixDHeight = (matrixD.length - 2) * 30 + 120;
  const matrixEHeight = (matrixE.length - 2) * 30 + 120;
  const matrixFHeight = (matrixF.length - 2) * 30 + 120;
  return (
    <>
      <section className={displayStyles.display}>
        {!AHidden ? (
          <section>
            <section
              style={{ height: `${matrixAHeight}px` }}
              className={displayStyles.calculatorDisplayMatrixInputSection}
            >
              <InputMatrix
                matrix={matrixA}
                setMatrix={setMatrixA}
                matrixID={"A"}
              />
            </section>
            <section
              style={{ height: `${matrixAHeight}px` }}
              className={matrixDisplayStyles.matrix}
            >
              <h1>A</h1>
              <p>=</p>
              <div>{displayMatrix(matrixA)}</div>
            </section>
          </section>
        ) : null}
        {!BHidden ? (
          <section>
            <section
              style={{ height: `${matrixBHeight}px` }}
              className={displayStyles.calculatorDisplayMatrixInputSection}
            >
              <InputMatrix
                matrix={matrixB}
                setMatrix={setMatrixB}
                matrixID={"B"}
              />
            </section>
            <section
              style={{ height: `${matrixBHeight}px` }}
              className={matrixDisplayStyles.matrix}
            >
              <h1>B</h1>
              <p>=</p>
              <div>{displayMatrix(matrixB)}</div>
            </section>
          </section>
        ) : null}
        {!CHidden ? (
          <section>
            <section
              style={{ height: `${matrixCHeight}px` }}
              className={displayStyles.calculatorDisplayMatrixInputSection}
            >
              <InputMatrix
                matrix={matrixC}
                setMatrix={setMatrixC}
                matrixID={"C"}
              />
            </section>
            <section
              style={{ height: `${matrixCHeight}px` }}
              className={matrixDisplayStyles.matrix}
            >
              <h1>C</h1>
              <p>=</p>
              <div>{displayMatrix(matrixC)}</div>
            </section>
          </section>
        ) : null}
        {!DHidden ? (
          <section>
            <section
              style={{ height: `${matrixDHeight}px` }}
              className={displayStyles.calculatorDisplayMatrixInputSection}
            >
              <InputMatrix
                matrix={matrixD}
                setMatrix={setMatrixD}
                matrixID={"D"}
              />
            </section>
            <section
              style={{ height: `${matrixDHeight}px` }}
              className={matrixDisplayStyles.matrix}
            >
              <h1>D</h1>
              <p>=</p>
              <div>{displayMatrix(matrixD)}</div>
            </section>
          </section>
        ) : null}
        {!EHidden ? (
          <section>
            <section
              style={{ height: `${matrixEHeight}px` }}
              className={displayStyles.calculatorDisplayMatrixInputSection}
            >
              <InputMatrix
                matrix={matrixE}
                setMatrix={setMatrixE}
                matrixID={"E"}
              />
            </section>
            <section
              style={{ height: `${matrixEHeight}px` }}
              className={matrixDisplayStyles.matrix}
            >
              <h1>E</h1>
              <p>=</p>
              <div>{displayMatrix(matrixE)}</div>
            </section>
          </section>
        ) : null}
        {!FHidden ? (
          <section
            style={{
              display: "flex",
              height: `${matrixFHeight}px`,
            }}
            className={displayStyles.calculatorDisplayMatrixInputSection}
          >
            <section>
              <InputMatrix
                matrix={matrixF}
                setMatrix={setMatrixF}
                matrixID={"F"}
              />
            </section>
            <section
              style={{ height: `${matrixFHeight}px` }}
              className={matrixDisplayStyles.matrix}
            >
              <h1>F</h1>
              <p>=</p>
              <div>{displayMatrix(matrixF)}</div>
            </section>
          </section>
        ) : null}

        <section className={displayStyles.calculatorDisplaySection}>
          <textarea
            className={displayStyles.calculatorDisplayCalculatorInput}
            disabled
            value={DisplayInput[0]}
          ></textarea>
        </section>
      </section>
    </>
  );
}
