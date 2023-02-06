import React, { FormEventHandler } from "react";
import ReactDOM from "react-dom/client";
import {
  BUTTON,
  EMAIL,
  EMAIL_LABEL,
  EMAIL_PATTERN,
  LOGIN_LABEL,
  PASSWORD,
  PASSWORD_LABEL,
  PASSWORD_PATTERN,
  RESET_PASSWORD_LINK,
} from "@/assets/message";
import { Button, Form, Menu, RoundFrame, TextInput } from "@/components";
import style from "@/assets/css/style.module.css";

const element = document.getElementById("signIn");

// サインイン画面
const SignIn = () => {
  return (
    <div className={style.container}>
      <h1>Reversi</h1>
      <Menu isSignIn={true} isSignUp={false} />
      <Form action={""} method={""} autoComplete={""}>
        <RoundFrame className="round-frame_double">
          <TextInput
            title={EMAIL_LABEL}
            name={EMAIL}
            type={EMAIL}
            pattern={EMAIL_PATTERN}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(`メールアドレス：${e.target.value}`)
            }
          />
          <TextInput
            title={PASSWORD_LABEL}
            name={PASSWORD}
            type={PASSWORD}
            pattern={PASSWORD_PATTERN}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(`パスワード${e.target.value}`)
            }
          />
        </RoundFrame>
        <div className={style.commonContainer}>
          <Button
            title={LOGIN_LABEL}
            type={BUTTON}
            disabled={false}
            onClick={() => console.log("送信するよ！！")}
          />
        </div>
        <div className={style.link}>
          <a href={"/forget-password"}>{RESET_PASSWORD_LINK}</a>
        </div>
      </Form>
    </div>
  );
};

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <SignIn {...element?.dataset} />
  </React.StrictMode>
);
