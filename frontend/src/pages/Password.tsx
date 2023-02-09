import React from "react";
import ReactDOM from "react-dom/client";
import {
  PASSWORD_CONFIRM,
  PASSWORD_CONFIRM_LABEL,
  PASSWORD_LABEL,
  PASSWORD_PATTERN,
  SETTING_BUTTON,
  SETTING_PASSWORD,
  SETTING_PASSWORD_LABEL,
  SUBMIT,
  TEXT,
} from "@/assets/message";
import { Button, Form, RoundFrame, TextInput } from "@/components";
import style from "@/assets/css/style.module.css";

const element = document.getElementById("password");

// パスワード設定画面(User情報を持っているか持っていないかで表示を変えたい？)
const Password = () => {
  return (
    <div className={style.container}>
      <div className={style.commonContainer}>
        <h1 className={style.commonLabel}>{SETTING_PASSWORD_LABEL}</h1>
      </div>
      <Form action={""} method={""} autoComplete={""}>
        <RoundFrame className={"round-frame_double"}>
          <TextInput
            title={PASSWORD_LABEL}
            name={SETTING_PASSWORD}
            type={TEXT}
            pattern={PASSWORD_PATTERN}
          />
          <TextInput
            title={PASSWORD_CONFIRM_LABEL}
            name={PASSWORD_CONFIRM}
            type={TEXT}
            pattern={PASSWORD_PATTERN}
          />
        </RoundFrame>
        <div className={style.commonContainer}>
          <Button title={SETTING_BUTTON} type={SUBMIT} disabled={false} />
        </div>
      </Form>
    </div>
  );
};

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <Password {...element?.dataset} />
  </React.StrictMode>
);
