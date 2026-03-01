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
} from "./components/matrixChallenge.ts";
//TODO: maybe add thing to remove e from input boxes(number so it can be input but it does nothing)
//TODO: make calculator functional (need to figure out exact functionality required and how to best implement it)
//TODO: implement functionality to prevent matrix input exceeding size of display section
import "./App.css";
import Keypad from "./components/Keypad.tsx";
import CalculatorDisplay from "./components/CalculatorDisplay.tsx";
// import InputMatrix from "./components/InputMatrix.tsx";
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
  const [matricesToCalc, setMatricesToCalc] = useState(["A", "A"]);
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

  const calcA: number[][] = [];
  const calcB: number[][] = [];
  const calcC: number[][] = [];
  const calcD: number[][] = [];
  const calcE: number[][] = [];
  const calcF: number[][] = [];
  createInputMatrices(matrixA, calcA);
  createInputMatrices(matrixB, calcB);
  createInputMatrices(matrixC, calcC);
  createInputMatrices(matrixD, calcD);
  createInputMatrices(matrixE, calcE);
  createInputMatrices(matrixF, calcF);
  function createInputMatrices(A: string[][], matrixOut: number[][]) {
    if (matrixOut.length < A.length) {
      for (let i = 0; i < A.length; i++) {
        matrixOut.push([]);
      }
    }
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        matrixOut[i][j] = Number(A[i][j]);
      }
    }
    return matrixOut;
  }

  const [DisplayInput, setDisplayInput] = useState([[""]]);
  console.log(DisplayInput);
  //Visible app here
  return (
    <>
      <main className="mainContainer">
        <section>
          <CalculatorDisplay
            calcA={calcA}
            calcB={calcB}
            calcC={calcC}
            calcD={calcD}
            calcE={calcE}
            calcF={calcF}
            matrixA={matrixA}
            setMatrixA={setMatrixA}
            AHidden={AHidden}
            matrixB={matrixB}
            setMatrixB={setMatrixB}
            BHidden={BHidden}
            matrixC={matrixC}
            setMatrixC={setMatrixC}
            CHidden={CHidden}
            matrixD={matrixD}
            setMatrixD={setMatrixD}
            DHidden={DHidden}
            matrixE={matrixE}
            setMatrixE={setMatrixE}
            EHidden={EHidden}
            matrixF={matrixF}
            setMatrixF={setMatrixF}
            FHidden={FHidden}
            DisplayInput={DisplayInput}
            matricesToCalc={matricesToCalc}
            setMatricesToCalc={setMatricesToCalc}
          />
          <Keypad
            setAHidden={setAHidden}
            AHidden={AHidden}
            setBHidden={setBHidden}
            BHidden={BHidden}
            setCHidden={setCHidden}
            CHidden={CHidden}
            setDHidden={setDHidden}
            DHidden={DHidden}
            setEHidden={setEHidden}
            EHidden={EHidden}
            setFHidden={setFHidden}
            FHidden={FHidden}
            DisplayInput={DisplayInput}
            setDisplayInput={setDisplayInput}
            matricesToCalc={matricesToCalc}
          />
        </section>
      </main>
    </>
  );
}
