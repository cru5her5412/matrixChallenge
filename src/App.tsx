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
  //Visible app here
  return (
    <>
      <main>
        <CalculatorDisplay
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
        />
      </main>
    </>
  );
}
