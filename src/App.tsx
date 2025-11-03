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
  const inputA = [
    [1, 2],
    [2, 1],
  ];
  const inputB = [
    [2, 1],
    [1, 2],
  ];
  const x = addMatrix(inputA, inputB);
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
  return (
    <>
      <h1>Hi</h1>
      <main>
        <section className="openBr"></section>
        <section>{displayMatrix(x)}</section>
        <section className="closeBr"></section>
      </main>
    </>
  );
}
