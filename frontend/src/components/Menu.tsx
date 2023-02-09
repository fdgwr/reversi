import {
  LOGIN_LABEL,
  REGISTRATION_LABEL,
  SIGNIN_PATH,
  SIGNUP_PATH,
} from "@/assets/message";
import menu from "@/assets/css/components/menu.module.css";

type Props = {
  isSignIn: boolean;
  isSignUp: boolean;
};

// ログイン、新規会員登録のメニューを表示
const Menu = (props: Props) => {
  const { isSignIn, isSignUp } = props;

  const isCheckAnchorTag = (isCheck: boolean, path: string, TEXT: string) =>
    isCheck ? (
      <a className={menu["menu-item_active"]}>{TEXT}</a>
    ) : (
      <a className={menu["menu-item"]} href={path}>
        {TEXT}
      </a>
    );

  return (
    <div className={menu["menu-container"]}>
      {isCheckAnchorTag(isSignIn, SIGNIN_PATH, LOGIN_LABEL)}
      {isCheckAnchorTag(isSignUp, SIGNUP_PATH, REGISTRATION_LABEL)}
    </div>
  );
};

export default Menu;
