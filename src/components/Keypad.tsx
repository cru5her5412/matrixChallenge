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
  DisplayInput,
  setDisplayInput,
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
  DisplayInput: Array<string>;
  setDisplayInput: Dispatch<SetStateAction<Array<string>>>;
}) {
  return (
    <>
      <section className={keypadStyles.keypad}>
        <div className={keypadStyles.keypadRow}>
          <button
            className={keypadStyles.keypadButton}
            onClick={() => {
              setDisplayInput([DisplayInput[0] + "1"]);
            }}
          >
            1
          </button>
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "2"])}
          >
            2
          </button>
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "3"])}
          >
            3
          </button>
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
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "4"])}
          >
            4
          </button>
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "5"])}
          >
            5
          </button>
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "6"])}
          >
            6
          </button>
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
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "7"])}
          >
            7
          </button>
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "8"])}
          >
            8
          </button>
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "9"])}
          >
            9
          </button>
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
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "+"])}
          >
            +
          </button>
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "-"])}
          >
            -
          </button>
          <button
            className={keypadStyles.keypadButton}
            onClick={() => setDisplayInput([DisplayInput[0] + "x"])}
          >
            x
          </button>
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
          <button
            className={keypadStyles.keypadButton}
            onClick={() =>
              setDisplayInput([
                DisplayInput[0].substring(0, DisplayInput[0].length - 1),
              ])
            }
          >
            {"<-"}
          </button>
        </div>
      </section>
    </>
  );
}
