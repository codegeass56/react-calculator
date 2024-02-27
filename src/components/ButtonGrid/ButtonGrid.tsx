import Button from "../Button/Button";
import style from "./ButtonGrid.module.css";

type Props = {
  onSelectOperation: (operation: string) => void;
  onNumberInput: (digit: string) => void;
};

function ButtonGrid({ onSelectOperation, onNumberInput }: Props) {
  return (
    <div className={style.buttonGrid}>
      <Button onClick={() => onNumberInput("7")}>7</Button>
      <Button onClick={() => onNumberInput("8")}>8</Button>
      <Button onClick={() => onNumberInput("9")}>9</Button>
      <Button className="addBtn" onClick={() => onSelectOperation("+")}>
        +
      </Button>
      <Button onClick={() => onNumberInput("4")}>4</Button>
      <Button onClick={() => onNumberInput("5")}>5</Button>
      <Button onClick={() => onNumberInput("6")}>6</Button>
      <Button className="subtractBtn" onClick={() => onSelectOperation("-")}>
        -
      </Button>
      <Button onClick={() => onNumberInput("1")}>1</Button>
      <Button onClick={() => onNumberInput("2")}>2</Button>
      <Button onClick={() => onNumberInput("3")}>3</Button>
      <Button className="multiplyBtn" onClick={() => onSelectOperation("x")}>
        x
      </Button>
      <Button onClick={() => onNumberInput("0")}>0</Button>
      <Button>.</Button>
      <Button>=</Button>
      <Button className="divideBtn" onClick={() => onSelectOperation("÷")}>
        ÷
      </Button>
      <Button className="clearBtn" onClick={() => onSelectOperation("AC")}>
        AC
      </Button>
    </div>
  );
}

export default ButtonGrid;
