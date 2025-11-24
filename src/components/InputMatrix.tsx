import type { Dispatch, SetStateAction } from "react";
export default function InputMatrix({
  matrix,
  setMatrix,
}: {
  matrix: string[][];
  setMatrix: Dispatch<SetStateAction<string[][]>>;
}) {
  function displayMatrix(matrix: string[][]) {
    return (
      <div className="matrixDisplay">
        <div className="openBr"></div>
        <span>
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
  function inputMatrix(
    matrix: string[][],
    setMatrix: Dispatch<SetStateAction<string[][]>>
  ) {
    return (
      <section>
        <section style={{ display: "inline-flex" }}>
          <div className="openBr"></div>
          <div>
            {matrix.map((row, indexR) => (
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
                          [...matrix],
                          setMatrix
                        );
                      }}
                      key={`col${indexC}row${indexR}`}
                      className={`row${indexR} col${indexC} inputMatrixInput`}
                      value={matrix[indexR][indexC]}
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
            <button onClick={() => handleShrinkRows(matrix, setMatrix)}>
              -
            </button>
            <button onClick={() => handleGrowRows(matrix, setMatrix)}>+</button>
          </div>
          <div className="buttonCols">
            <h2>Columns</h2>
            <button onClick={() => handleShrinkCols(matrix, setMatrix)}>
              -
            </button>
            <button onClick={() => handleGrowCols(matrix, setMatrix)}>+</button>
          </div>
        </section>
      </section>
    );
  }
  function handleEditMatrix(
    row: number,
    col: number,
    value: string,
    matrix: string[][],
    setMatrix: Dispatch<SetStateAction<string[][]>>
  ) {
    const tempMatrix: string[][] = [...matrix];
    tempMatrix[row][col] = value;
    console.log(tempMatrix);
    setMatrix(tempMatrix);
    console.log("matrix");
  }
  function handleShrinkRows(
    matrix: string[][],
    setMatrix: Dispatch<SetStateAction<string[][]>>
  ) {
    if (matrix.length > 2) {
      const tempMatrix = [...matrix];
      tempMatrix.splice(tempMatrix.length - 1, 1);
      setMatrix(tempMatrix);
    }
  }
  function handleGrowRows(
    matrix: string[][],
    setMatrix: Dispatch<SetStateAction<string[][]>>
  ) {
    if (matrix.length < 6) {
      const tempMatrix = [...matrix];
      tempMatrix.push([]);
      for (let i = 0; i < matrix[0].length; i++) {
        tempMatrix[tempMatrix.length - 1].push("0");
      }
      console.log(tempMatrix);

      setMatrix(tempMatrix);
    }
  }
  function handleShrinkCols(
    matrix: string[][],
    setMatrix: Dispatch<SetStateAction<string[][]>>
  ) {
    if (matrix[0].length > 2) {
      const tempMatrix = [...matrix];
      for (let i = 0; i < matrix.length; i++) {
        tempMatrix[i].splice(tempMatrix[i].length - 1, 1);
      }
      setMatrix(tempMatrix);
    }
  }
  function handleGrowCols(
    matrix: string[][],
    setMatrix: Dispatch<SetStateAction<string[][]>>
  ) {
    if (matrix[0].length < 6) {
      const tempMatrix = [...matrix];

      for (let i = 0; i < matrix.length; i++) {
        tempMatrix[i].push("0");
      }
      console.log(tempMatrix);
      setMatrix(tempMatrix);
    }
  }
  return (
    <>
      <section>{inputMatrix(matrix, setMatrix)}</section>
      <section>{displayMatrix(matrix)}</section>
    </>
  );
}
