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
  return (
    <>
      <section className={matrixDisplayStyles.display}></section>
    </>
  );
}
