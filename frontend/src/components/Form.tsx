type Props = {
  action: string;
  method: string;
  autoComplete: string;
  children?: React.ReactNode;
};

// サインアップとサインインで使用（入力欄とボタンの組み合わせ）
const Form = (props: Props) => {
  return (
    <form
      action={props.action}
      method={props.method}
      autoComplete={props.autoComplete}
    >
      {props.children}
    </form>
  );
};

export default Form;
