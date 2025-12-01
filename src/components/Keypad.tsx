import keypadStyles from "./Keypad.module.css";
import type { Dispatch, SetStateAction } from "react";
export default function Keypad({
  setAHidden,
  AHidden,
  setBHidden,
  BHidden,
  setCHidden,
  CHidden,
  setDHidden,
  DHidden,
  setEHidden,
  EHidden,
  setFHidden,
  FHidden,
}: {
  setAHidden: Dispatch<SetStateAction<boolean>>;
  AHidden: boolean;
  setBHidden: Dispatch<SetStateAction<boolean>>;
  BHidden: boolean;
  setCHidden: Dispatch<SetStateAction<boolean>>;
  CHidden: boolean;
  setDHidden: Dispatch<SetStateAction<boolean>>;
  DHidden: boolean;
  setEHidden: Dispatch<SetStateAction<boolean>>;
  EHidden: boolean;
  setFHidden: Dispatch<SetStateAction<boolean>>;
  FHidden: boolean;
}) {
  return (
    <>
      <section className={keypadStyles.keypad}>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>1</button>
          <button className={keypadStyles.keypadButton}>2</button>
          <button className={keypadStyles.keypadButton}>3</button>
          <button
            onClick={() => setAHidden(!AHidden)}
            className={keypadStyles.keypadButton}
          >
            A
          </button>
          <button
            onClick={() => setBHidden(!BHidden)}
            className={keypadStyles.keypadButton}
          >
            B
          </button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>4</button>
          <button className={keypadStyles.keypadButton}>5</button>
          <button className={keypadStyles.keypadButton}>6</button>
          <button
            onClick={() => setCHidden(!CHidden)}
            className={keypadStyles.keypadButton}
          >
            C
          </button>
          <button
            onClick={() => setDHidden(!DHidden)}
            className={keypadStyles.keypadButton}
          >
            D
          </button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>7</button>
          <button className={keypadStyles.keypadButton}>8</button>
          <button className={keypadStyles.keypadButton}>9</button>
          <button
            onClick={() => setEHidden(!EHidden)}
            className={keypadStyles.keypadButton}
          >
            E
          </button>
          <button
            onClick={() => setFHidden(!FHidden)}
            className={keypadStyles.keypadButton}
          >
            F
          </button>
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
