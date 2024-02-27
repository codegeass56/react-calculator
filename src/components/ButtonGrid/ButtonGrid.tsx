import Button from "../Button/Button";
import style from "./ButtonGrid.module.css";

type Props = {
  onSelectOperation: (operation: string) => void;
  onNumberClick: (digit: string) => void;
  onAllClear: () => void;
  onDelete: () => void;
  onEquals: () => void;
  onPercentage: () => void;
};

function ButtonGrid({
  onSelectOperation,
  onNumberClick,
  onAllClear,
  onDelete,
  onEquals,
  onPercentage,
}: Props) {
  return (
    <div className={style.buttonGrid}>
      <Button onClick={() => onNumberClick("7")}>7</Button>
      <Button onClick={() => onNumberClick("8")}>8</Button>
      <Button onClick={() => onNumberClick("9")}>9</Button>
      <Button className="addBtn" onClick={() => onSelectOperation("+")}>
        +
      </Button>
      <Button onClick={() => onNumberClick("4")}>4</Button>
      <Button onClick={() => onNumberClick("5")}>5</Button>
      <Button onClick={() => onNumberClick("6")}>6</Button>
      <Button className="subtractBtn" onClick={() => onSelectOperation("-")}>
        -
      </Button>
      <Button onClick={() => onNumberClick("1")}>1</Button>
      <Button onClick={() => onNumberClick("2")}>2</Button>
      <Button onClick={() => onNumberClick("3")}>3</Button>
      <Button className="multiplyBtn" onClick={() => onSelectOperation("x")}>
        x
      </Button>
      <Button onClick={() => onNumberClick("0")}>0</Button>
      <Button onClick={() => onNumberClick(".")}>.</Button>
      <Button onClick={onEquals}>=</Button>
      <Button className="divideBtn" onClick={() => onSelectOperation("÷")}>
        ÷
      </Button>
      <Button className="clearBtn" onClick={onAllClear}>
        AC
      </Button>
      <Button className="deleteBtn" onClick={onDelete}>
        C
      </Button>
      <Button className="percentBtn" onClick={onPercentage}>
        %
      </Button>
    </div>
  );
}

export default ButtonGrid;
