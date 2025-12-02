import type { Dispatch, SetStateAction } from "react";
import displayStyles from "./CalculatorDisplay.module.css";
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
}) {
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
        ) : null}
        {!BHidden ? (
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
        ) : null}
        {!CHidden ? (
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
        ) : null}
        {!DHidden ? (
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
        ) : null}
        {!EHidden ? (
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
        ) : null}
        {!FHidden ? (
          <section
            style={{ height: `${matrixFHeight}px` }}
            className={displayStyles.calculatorDisplayMatrixInputSection}
          >
            <InputMatrix
              matrix={matrixF}
              setMatrix={setMatrixF}
              matrixID={"F"}
            />
          </section>
        ) : null}
        <section className={displayStyles.calculatorDisplaySection}>
          Calculator here
        </section>
      </section>
    </>
  );
}
