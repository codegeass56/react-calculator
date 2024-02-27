import style from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};
function Button({ children, className = "" }: Props) {
  return <button className={style.button + ` ${className}`}>{children}</button>;
}

export default Button;
