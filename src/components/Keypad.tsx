import keypadStyles from "./Keypad.module.css";
export default function Keypad() {
  return (
    <>
      <section className={keypadStyles.keypad}>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>1</button>
          <button className={keypadStyles.keypadButton}>2</button>
          <button className={keypadStyles.keypadButton}>3</button>
          <button className={keypadStyles.keypadButton}>A</button>
          <button className={keypadStyles.keypadButton}>B</button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>4</button>
          <button className={keypadStyles.keypadButton}>5</button>
          <button className={keypadStyles.keypadButton}>6</button>
          <button className={keypadStyles.keypadButton}>C</button>
          <button className={keypadStyles.keypadButton}>D</button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>7</button>
          <button className={keypadStyles.keypadButton}>8</button>
          <button className={keypadStyles.keypadButton}>9</button>
          <button className={keypadStyles.keypadButton}>E</button>
          <button className={keypadStyles.keypadButton}>F</button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>+</button>
          <button className={keypadStyles.keypadButton}>-</button>
          <button className={keypadStyles.keypadButton}>x</button>
          <button className={keypadStyles.keypadButton}>Rotate</button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>Rotation matrix</button>
          <button className={keypadStyles.keypadButton}>Inverse</button>
          <button className={keypadStyles.keypadButton}>Trace</button>
          <button className={keypadStyles.keypadButton}>DET</button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>Change theme</button>
          <button className={keypadStyles.keypadButton}>Settings</button>
          <button className={keypadStyles.keypadButton}>Return</button>
        </div>
      </section>
    </>
  );
}
