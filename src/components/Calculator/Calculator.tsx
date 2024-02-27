import style from "./Calculator.module.css";
import Title from "../Title";
import ButtonGrid from "../ButtonGrid/ButtonGrid";
import Screen from "../Screen/Screen";

function Calculator() {
  return (
    <div className={style.calculator}>
      <Title />
      <Screen />
      <ButtonGrid />
    </div>
  );
}

export default Calculator;
