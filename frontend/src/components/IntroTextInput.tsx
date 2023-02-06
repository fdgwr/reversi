import introTextInput from "@/assets/css/components/input.module.css";

type Props = {
  title: string;
  name: string; // サーバーサイドが受け取る時の変数名
  type: "text" | "email" | "password"; // text or passwordの二択
  pattern: string; // 正規表現
};

const IntroTextInput = (props: Props) => {
  return (
    <div className={introTextInput["intro-text-input-container"]}>
      <label
        className={introTextInput["intro-text-input-label"]}
        htmlFor={props.name}
      >
        {props.title}
      </label>
      <input
        className={introTextInput["intro-text-input"]}
        name={props.name}
        type={props.type}
        defaultValue=""
        pattern={props.pattern}
      />
    </div>
  );
};

export default IntroTextInput;
