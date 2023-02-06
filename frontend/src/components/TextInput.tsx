import textInput from "@/assets/css/components/input.module.css";

// テキストフィールドの受け取る型
type Props = {
  title: string;
  name: string; // サーバーサイドが受け取る時の変数名
  type: "text" | "email" | "password"; // text or passwordの二択
  pattern: string; // 正規表現
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // ステートを変更時の関数
};

// メールアドレスとパスワード用
const TextInput = (props: Props) => {
  return (
    <div className={textInput["text-input-container"]}>
      <label className={textInput["text-input-label"]} htmlFor={props.name}>
        {props.title}
      </label>
      <input
        className={textInput["text-input"]}
        name={props.name}
        type={props.type}
        defaultValue=""
        
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextInput;
