import matrixDisplayStyles from "./MatrixDisplay.module.css";
export default function MatrixDisplay({
  matrixA,
  matrixB,
  matrixC,
  matrixD,
  matrixE,
  matrixF,
}: {
  matrixA: string[][];
  matrixB: string[][];
  matrixC: string[][];
  matrixD: string[][];
  matrixE: string[][];
  matrixF: string[][];
}) {
  const matrixAHeight = matrixA.length * 25;
  const matrixBHeight = matrixB.length * 25;
  const matrixCHeight = matrixC.length * 25;
  const matrixDHeight = matrixD.length * 25;
  const matrixEHeight = matrixE.length * 25;
  const matrixFHeight = matrixF.length * 25;
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
  return (
    <>
      <section className={matrixDisplayStyles.display}>
        <section
          style={{ height: `${matrixAHeight}px` }}
          className={matrixDisplayStyles.matrix}
        >
          <h1>A</h1>
          <p>=</p>
          <div>{displayMatrix(matrixA)}</div>
        </section>
        <section
          style={{ height: `${matrixBHeight}px` }}
          className={matrixDisplayStyles.matrix}
        >
          <h1>B</h1>
          <p>=</p>
          <div>{displayMatrix(matrixB)}</div>
        </section>
        <section
          style={{ height: `${matrixCHeight}px` }}
          className={matrixDisplayStyles.matrix}
        >
          <h1>C</h1>
          <p>=</p>
          <div>{displayMatrix(matrixC)}</div>
        </section>
        <section
          style={{ height: `${matrixDHeight}px` }}
          className={matrixDisplayStyles.matrix}
        >
          <h1>D</h1>
          <p>=</p>
          <div>{displayMatrix(matrixD)}</div>
        </section>
        <section
          style={{ height: `${matrixEHeight}px` }}
          className={matrixDisplayStyles.matrix}
        >
          <h1>E</h1>
          <p>=</p>
          <div>{displayMatrix(matrixE)}</div>
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
    </>
  );
}
