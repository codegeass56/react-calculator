import style from "./Calculator.module.css";
import Title from "../Title";
import ButtonGrid from "../ButtonGrid/ButtonGrid";
import Screen from "../Screen/Screen";
import { useState } from "react";

function Calculator() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  function calculate() {
    if (!prevValue || !operation) return currentValue;
    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;

    switch (operation) {
      case "÷":
        result = prev / curr;
        break;
      case "x":
        result = prev * curr;
        break;
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
    }

    return result;
  }

  function equals() {
    const result = calculate();
    setCurrentValue(`${result}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  }

  function percent() {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  }

  function selectOperation(operation: string) {
    if (prevValue) {
      const result = calculate();
      setCurrentValue(`${result}`);
      setPrevValue(`${result}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  }

  function setDigit(digit: string) {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;
    if (overwrite) {
      if (currentValue === "0" && digit === ".") {
        setCurrentValue(`${currentValue}${digit}`);
      } else if (operation && digit === ".") {
        setCurrentValue(`0${digit}`);
      } else {
        setCurrentValue(digit);
      }
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  }

  function allClear() {
    setPrevValue("");
    setCurrentValue("0");
    setOperation("");
    setOverwrite(true);
  }

  function deleteValue() {
    setCurrentValue("0");
    setOverwrite(true);
  }

  return (
    <div className={style.calculator}>
      <Title />
      <Screen content={currentValue} />
      <ButtonGrid
        onSelectOperation={selectOperation}
        onNumberClick={setDigit}
        onAllClear={allClear}
        onDelete={deleteValue}
        onEquals={equals}
        onPercentage={percent}
      />
    </div>
  );
}

export default Calculator;
