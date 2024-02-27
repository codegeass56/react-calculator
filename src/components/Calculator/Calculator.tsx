import style from "./Calculator.module.css";
import Title from "../Title";
import ButtonGrid from "../ButtonGrid/ButtonGrid";
import Screen from "../Screen/Screen";
import { useState } from "react";

function Calculator() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");

  function selectOperation(operation: string) {
    setOperation(operation);
  }

  function setDigit(digit: string) {
    setCurrentValue(digit);
  }

  return (
    <div className={style.calculator}>
      <Title />
      <Screen content={currentValue} />
      <ButtonGrid
        onSelectOperation={selectOperation}
        onNumberInput={setDigit}
      />
    </div>
  );
}

export default Calculator;
