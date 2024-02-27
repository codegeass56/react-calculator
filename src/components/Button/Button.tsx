import style from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
};
function Button({ children, className = "", onClick }: Props) {
  return (
    <button className={style.button + ` ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
