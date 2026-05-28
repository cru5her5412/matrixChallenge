import matrixDisplayStyles from "./MatrixDisplay.module.css";

export default function displayMatrix(matrix: string[][]) {
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