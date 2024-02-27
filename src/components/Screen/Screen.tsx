import style from "./Screen.module.css";

type Props = {
  content: string;
};

function Screen({ content }: Props) {
  return (
    <div className={style.screen}>
      <p className={style.screenContent}>{content}</p>
    </div>
  );
}

export default Screen;
