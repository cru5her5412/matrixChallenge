import { useState, type Dispatch, type SetStateAction } from "react";
import displayStyles from "./CalculatorDisplay.module.css";
import matrixDisplayStyles from "./MatrixDisplay.module.css";
import CalculationSection from "./CalculationSection";
import InputMatrix from "./InputMatrix";
export default function CalculatorDisplay({
  calcA,
  calcB,
  calcC,
  calcD,
  calcE,
  calcF,
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
  matricesToCalc,
  setMatricesToCalc,
}: {
  calcA: number[][];
  calcB: number[][];
  calcC: number[][];
  calcD: number[][];
  calcE: number[][];
  calcF: number[][];
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
  DisplayInput: Array<string[]>;
  matricesToCalc: string[];
  setMatricesToCalc: Dispatch<SetStateAction<string[]>>;
}) {
  function displayMatrix(matrix: string[][]) {
    return (
      <div className="matrixDisplay">
        <div className="openBr"></div>
        <span className={displayStyles.DisplayMatrixPart}>
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
  function handleAddMatrixToCalc(matrixToAdd: string) {
    if (matricesToCalc.length >= 1) {
      setMatricesToCalc([matricesToCalc[1], matrixToAdd]);
    } else {
      setMatricesToCalc([matrixToAdd]);
    }
  }
  return (
    <>
      <section className={displayStyles.display}>
        <section>
          {DisplayInput.map((input, index) => (
            <CalculationSection
              key={index}
              DisplayInput={input}
              calcA={calcA}
              calcB={calcB}
              calcC={calcC}
              calcD={calcD}
              calcE={calcE}
              calcF={calcF}
              displayMatrix={displayMatrix}
              index={index}
            ></CalculationSection>
          ))}
        </section>
        {!AHidden ? (
          <section
            style={{
              display: "flex",
              height: `${matrixAHeight}px`,
            }}
          >
            <section
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
              className={displayStyles.DisplayMatrix}
            >
              <h1>A</h1>
              <p>=</p>
              <div>{displayMatrix(matrixA)}</div>
            </section>
            <button onClick={() => handleAddMatrixToCalc("A")}>
              Add A to Calculation
            </button>
          </section>
        ) : null}
        {!BHidden ? (
          <section
            style={{
              display: "flex",
              height: `${matrixBHeight}px`,
            }}
          >
            <section
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
              className={displayStyles.DisplayMatrix}
            >
              <h1>B</h1>
              <p>=</p>
              <div>{displayMatrix(matrixB)}</div>
            </section>
            <button onClick={() => handleAddMatrixToCalc("B")}>
              Add B to Calculation
            </button>
          </section>
        ) : null}
        {!CHidden ? (
          <section
            style={{
              display: "flex",
              height: `${matrixCHeight}px`,
            }}
          >
            <section
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
              className={displayStyles.DisplayMatrix}
            >
              <h1>C</h1>
              <p>=</p>
              <div>{displayMatrix(matrixC)}</div>
            </section>
            <button onClick={() => handleAddMatrixToCalc("C")}>
              Add C to Calculation
            </button>
          </section>
        ) : null}
        {!DHidden ? (
          <section
            style={{
              display: "flex",
              height: `${matrixDHeight}px`,
            }}
          >
            <section
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
              className={displayStyles.DisplayMatrix}
            >
              <h1>D</h1>
              <p>=</p>
              <div>{displayMatrix(matrixD)}</div>
            </section>
            <button onClick={() => handleAddMatrixToCalc("D")}>
              Add D to Calculation
            </button>
          </section>
        ) : null}
        {!EHidden ? (
          <section
            style={{
              display: "flex",
              height: `${matrixEHeight}px`,
            }}
          >
            <section
              className={displayStyles.calculatorDisplayMatrixInputSection}
            >
              <InputMatrix
                matrix={matrixE}
                setMatrix={setMatrixE}
                matrixID={"E"}
              />
            </section>
            <section
              style={{ height: `${matrixEHeight}px`, maxWidth: "30vw" }}
              className={displayStyles.DisplayMatrix}
            >
              <h1>E</h1>
              <p>=</p>
              <div>{displayMatrix(matrixE)}</div>
            </section>
            <button onClick={() => handleAddMatrixToCalc("E")}>
              Add E to Calculation
            </button>
          </section>
        ) : null}
        {!FHidden ? (
          <section
            style={{
              display: "flex",
              height: `${matrixFHeight}px`,
            }}
          >
            <section
              className={displayStyles.calculatorDisplayMatrixInputSection}
            >
              <InputMatrix
                matrix={matrixF}
                setMatrix={setMatrixF}
                matrixID={"F"}
              />
            </section>
            <section
              style={{ height: `${matrixFHeight}px` }}
              className={displayStyles.DisplayMatrix}
            >
              <h1>F</h1>
              <p>=</p>
              <div>{displayMatrix(matrixF)}</div>
            </section>
            <button onClick={() => handleAddMatrixToCalc("F")}>
              Add F to Calculation
            </button>
          </section>
        ) : null}
      </section>
    </>
  );
}
