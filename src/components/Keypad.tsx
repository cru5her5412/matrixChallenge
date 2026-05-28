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
  textAreaContent,
  setTextAreaContent
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
  textAreaContent: string;
  setTextAreaContent: Dispatch<SetStateAction<string>>;
}) {
  const textArea: HTMLElement | null = document.querySelector("#calculatorDisplayTextArea")
  console.log(textArea)
  function handleEditText(charToAdd:string,isRemovingChar:boolean){
    if(isRemovingChar===false){
    setTextAreaContent(textAreaContent + charToAdd);}
    else{
      setTextAreaContent(textAreaContent.slice(0,textAreaContent.length-1))
    }
    
}
  return (
    <>
      <section className={keypadStyles.keypad}>
        <div className={keypadStyles.keypadRow}>
          <button onClick={()=>handleEditText("1",false)} className={keypadStyles.keypadButton}>1</button>
          <button onClick={()=>handleEditText("2",false)} className={keypadStyles.keypadButton}>2</button>
          <button onClick={()=>handleEditText("3",false)} className={keypadStyles.keypadButton}>3</button>
          <button
            onClick={() => setAHidden(false)}
            className={keypadStyles.keypadButton}
          >
            A
          </button>
          <button
            onClick={() => setBHidden(false)}
            className={keypadStyles.keypadButton}
          >
            B
          </button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button onClick={()=>handleEditText("4",false)} className={keypadStyles.keypadButton}>4</button>
          <button onClick={()=>handleEditText("5",false)} className={keypadStyles.keypadButton}>5</button>
          <button onClick={()=>handleEditText("6",false)} className={keypadStyles.keypadButton}>6</button>
          <button
            onClick={() => setCHidden(false)}
            className={keypadStyles.keypadButton}
          >
            C
          </button>
          <button
            onClick={() => setDHidden(false)}
            className={keypadStyles.keypadButton}
          >
            D
          </button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button onClick={()=>handleEditText("7",false)} className={keypadStyles.keypadButton}>7</button>
          <button onClick={()=>handleEditText("8",false)} className={keypadStyles.keypadButton}>8</button>
          <button onClick={()=>handleEditText("9",false)} className={keypadStyles.keypadButton}>9</button>
          <button
            onClick={() => setEHidden(false)}
            className={keypadStyles.keypadButton}
          >
            E
          </button>
          <button
            onClick={() => setFHidden(false)}
            className={keypadStyles.keypadButton}
          >
            F
          </button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button onClick={()=>handleEditText("+",false)} className={keypadStyles.keypadButton}>+</button>
          <button onClick={()=>handleEditText("-",false)} className={keypadStyles.keypadButton}>-</button>
          <button onClick={()=>handleEditText("x",false)} className={keypadStyles.keypadButton}>x</button>
          <button onClick={()=>handleEditText("",true)} className={keypadStyles.keypadButtonArrow}>←</button>
          <button  className={keypadStyles.keypadButton}>Return</button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>Rotation matrix</button>
          <button className={keypadStyles.keypadButton}>Inverse</button>
          <button className={keypadStyles.keypadButton}>Trace</button>
          <button className={keypadStyles.keypadButton}>DET</button>
          <button className={keypadStyles.keypadButton}>Rotate</button>
        </div>
        <div className={keypadStyles.keypadRow}>
          <button className={keypadStyles.keypadButton}>Change theme</button>
          <button className={keypadStyles.keypadButton}>Settings</button>
          
        </div>
      </section>
    </>
  );
}
