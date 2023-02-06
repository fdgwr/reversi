import button from "@/assets/css/components/button.module.css";

// ボタンコンポーネントの受け取る型定義
type Props = {
  title: string; // ボタンのタイトル
  type: "submit" | "button"; // ボタンのタイプ
  disabled: boolean; // 非活性化にするか否か
  onClick: () => void; // クリック時のアクション
};

// ボタンの部品
const Button = (props: Props) => {
  return (
    <button
      className={button["button-primary"]}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
