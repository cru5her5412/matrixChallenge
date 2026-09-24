import type { Dispatch, SetStateAction } from "react";
import displayStyles from "./CalculatorDisplay.module.css";
import InputMatrix from "./InputMatrix";
import displayMatrix from "./displayMatrix";
import Calculator from "./Calculator";
import CalculationInput from "./CalculationInput";
import CalculationOutput from "./CalculationOutput";
//todo:
export default function CalculatorDisplay({
  matrixA,
  setMatrixA,
  AHidden,
  setAHidden,
  matrixB,
  setMatrixB,
  BHidden,
  setBHidden,
  matrixC,
  setMatrixC,
  CHidden,
  setCHidden,
  matrixD,
  setMatrixD,
  DHidden,
  setDHidden,
  matrixE,
  setMatrixE,
  EHidden,
  setEHidden,
  matrixF,
  setMatrixF,
  FHidden,
  setFHidden,
  textAreaContent,
  setTextAreaContent,
  activeCalculationCount,
  setActiveCalculationCount,
}: {
  matrixA: string[][];
  setMatrixA: Dispatch<SetStateAction<string[][]>>;
  AHidden: boolean;
  setAHidden: Dispatch<SetStateAction<boolean>>;
  matrixB: string[][];
  setMatrixB: Dispatch<SetStateAction<string[][]>>;
  BHidden: boolean;
  setBHidden: Dispatch<SetStateAction<boolean>>;
  matrixC: string[][];
  setMatrixC: Dispatch<SetStateAction<string[][]>>;
  CHidden: boolean;
  setCHidden: Dispatch<SetStateAction<boolean>>;
  matrixD: string[][];
  setMatrixD: Dispatch<SetStateAction<string[][]>>;
  DHidden: boolean;
  setDHidden: Dispatch<SetStateAction<boolean>>;
  matrixE: string[][];
  setMatrixE: Dispatch<SetStateAction<string[][]>>;
  EHidden: boolean;
  setEHidden: Dispatch<SetStateAction<boolean>>;
  matrixF: string[][];
  setMatrixF: Dispatch<SetStateAction<string[][]>>;
  FHidden: boolean;
  setFHidden: Dispatch<SetStateAction<boolean>>;
  textAreaContent: string[];
  setTextAreaContent: Dispatch<SetStateAction<string[]>>;
  activeCalculationCount: number;
  setActiveCalculationCount: Dispatch<SetStateAction<number>>;
}) {
  let activeCalculationCountArr: number[] = [];
  for (let i = 0; i < activeCalculationCount; i++) {
    activeCalculationCountArr.splice(i, 0, i);
  }
  let matrixHeights: number[] = [];
  matrixHeights[0] = (matrixA.length - 2) * 30 + 120;
  matrixHeights[1] = (matrixB.length - 2) * 30 + 120;
  matrixHeights[2] = (matrixC.length - 2) * 30 + 120;
  matrixHeights[3] = (matrixD.length - 2) * 30 + 120;
  matrixHeights[4] = (matrixE.length - 2) * 30 + 120;
  matrixHeights[5] = (matrixF.length - 2) * 30 + 120;
  return (
    <>
      <section className={displayStyles.display}>
        {!AHidden ? (
          <section
            style={{ height: `${matrixHeights[0]}px` }}
            className={displayStyles.calculatorDisplayMatrixInputSection}
          >
            <InputMatrix
              matrix={matrixA}
              setMatrix={setMatrixA}
              matrixID={"A"}
              matrixHidden={AHidden}
              setMatrixHidden={setAHidden}
            />
          </section>
        ) : null}
        {!BHidden ? (
          <section
            style={{ height: `${matrixHeights[1]}px` }}
            className={displayStyles.calculatorDisplayMatrixInputSection}
          >
            <InputMatrix
              matrix={matrixB}
              setMatrix={setMatrixB}
              matrixID={"B"}
              matrixHidden={BHidden}
              setMatrixHidden={setBHidden}
            />
          </section>
        ) : null}
        {!CHidden ? (
          <section
            style={{ height: `${matrixHeights[2]}px` }}
            className={displayStyles.calculatorDisplayMatrixInputSection}
          >
            <InputMatrix
              matrix={matrixC}
              setMatrix={setMatrixC}
              matrixID={"C"}
              matrixHidden={CHidden}
              setMatrixHidden={setCHidden}
            />
          </section>
        ) : null}
        {!DHidden ? (
          <section
            style={{ height: `${matrixHeights[3]}px` }}
            className={displayStyles.calculatorDisplayMatrixInputSection}
          >
            <InputMatrix
              matrix={matrixD}
              setMatrix={setMatrixD}
              matrixID={"D"}
              matrixHidden={DHidden}
              setMatrixHidden={setDHidden}
            />
          </section>
        ) : null}
        {!EHidden ? (
          <section
            style={{ height: `${matrixHeights[4]}px` }}
            className={displayStyles.calculatorDisplayMatrixInputSection}
          >
            <InputMatrix
              matrix={matrixE}
              setMatrix={setMatrixE}
              matrixID={"E"}
              matrixHidden={EHidden}
              setMatrixHidden={setEHidden}
            />
          </section>
        ) : null}
        {!FHidden ? (
          <section
            style={{ height: `${matrixHeights[5]}px` }}
            className={displayStyles.calculatorDisplayMatrixInputSection}
          >
            <InputMatrix
              matrix={matrixF}
              setMatrix={setMatrixF}
              matrixID={"F"}
              matrixHidden={FHidden}
              setMatrixHidden={setFHidden}
            />
          </section>
        ) : null}
        {activeCalculationCountArr.map((_, index) => (
          <section style={{ display: "inline-flex" }}>
            <CalculationInput
              className={"calculationNum" + index}
              matrixHeights={matrixHeights}
              textAreaContent={textAreaContent}
              setTextAreaContent={setTextAreaContent}
            />
            <CalculationOutput className={"answerNum" + index} />
          </section>
        ))}
      </section>
    </>
  );
}
