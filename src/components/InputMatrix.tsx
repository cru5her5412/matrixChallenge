export default function InputMatrix() {
  function handleEditMatrix(row: number, col: number, value: string) {
    const tempMatrix: string[][] = [...matrixA];
    tempMatrix[row][col] = value;
    console.log(tempMatrix);
    setMatrixA(tempMatrix);
  }
  function handleShrinkRows() {
    if (matrixA.length > 2) {
      const tempMatrix = [...matrixA];
      tempMatrix.splice(tempMatrix.length - 1, 1);
      setMatrixA(tempMatrix);
    }
  }
  function handleGrowRows() {
    if (matrixA.length < 6) {
      const tempMatrix = [...matrixA];
      tempMatrix.push([]);
      for (let i = 0; i < matrixA[0].length; i++) {
        tempMatrix[tempMatrix.length - 1].push("");
      }
      console.log(tempMatrix);
      setMatrixA(tempMatrix);
    }
  }
  function handleShrinkCols() {
    if (matrixA[0].length > 2) {
      const tempMatrix = [...matrixA];
      for (let i = 0; i < matrixA.length; i++) {
        tempMatrix[i].splice(tempMatrix[i].length - 1, 1);
      }
      setMatrixA(tempMatrix);
    }
  }
  function handleGrowCols() {
    if (matrixA[0].length < 6) {
      const tempMatrix = [...matrixA];

      for (let i = 0; i < matrixA.length; i++) {
        tempMatrix[i].push("");
      }
      console.log(tempMatrix);
      setMatrixA(tempMatrix);
    }
    return (
      <section>
        <section style={{ display: "inline-flex" }}>
          <div className="openBr"></div>
          <div>
            {matrixA.map((row, indexR) => (
              <form key={indexR} className={`row${indexR}`}>
                {row.map((_, indexC) => {
                  return (
                    <input
                      type="number"
                      onChange={(e) => {
                        handleEditMatrix(indexR, indexC, e.target.value);
                      }}
                      key={`col${indexC}row${indexR}`}
                      className={`row${indexR} col${indexC} inputA`}
                      value={matrixA[indexR][indexC]}
                    />
                  );
                })}
              </form>
            ))}
          </div>

          <div className="closeBr"></div>
        </section>
        <div className="buttonRows">
          <h2>Rows</h2>
          <button onClick={handleShrinkRows}>-</button>
          <button onClick={handleGrowRows}>+</button>
        </div>
        <div className="buttonCols">
          <h2>Columns</h2>
          <button onClick={handleShrinkCols}>-</button>
          <button onClick={handleGrowCols}>+</button>
        </div>
      </section>
    );
  }
}
