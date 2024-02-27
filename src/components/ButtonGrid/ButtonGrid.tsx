import Button from "../Button/Button";
import style from "./ButtonGrid.module.css";

function ButtonGrid() {
  return (
    <div className={style.buttonGrid}>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button className="addBtn">+</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button className="subtractBtn">-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button className="multiplyBtn">x</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button>=</Button>
      <Button className="divideBtn">÷</Button>
      <Button className="clearBtn">AC</Button>
    </div>
  );
}

export default ButtonGrid;
