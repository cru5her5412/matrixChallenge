import type { Dispatch, SetStateAction } from "react";
import displayStyles from "./CalculatorDisplay.module.css";

export default function CalculationInput({
  className,
  matrixHeights,
  textAreaContent,
  setTextAreaContent,
}: {
  className: string;
  matrixHeights: number[];
  textAreaContent: string;
  setTextAreaContent: Dispatch<SetStateAction<string>>;
}) {
  return (
    <section
      style={{ height: `${Math.max(...matrixHeights)}px` }}
      className={displayStyles.calculatorInputSection}
    >
      {/*todo: add logic for calculator display here, allowing input from a keyboard or keypad, recognising when/if certain calculations can be done*/}
      <textarea
        className={className}
        value={textAreaContent}
        style={{
          height: `${Math.max(...matrixHeights) - 24}px`,
          width: "calc(60vw - 24px)",
          margin: "10px",
        }}
        onChange={(e) => {
          setTextAreaContent(e.target.value);
        }}
      ></textarea>
    </section>
  );
}
