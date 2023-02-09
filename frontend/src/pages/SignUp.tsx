import React from "react";
import ReactDOM from "react-dom/client";
import {
  EMAIL,
  EMAIL_CONFIRM,
  EMAIL_CONFIRM_LABEL,
  EMAIL_LABEL,
  EMAIL_PATTERN,
  REGISTRATION_LABEL,
  SUBMIT,
} from "@/assets/message";
import { Button, Form, Menu, RoundFrame, TextInput } from "@/components";
import style from "@/assets/css/style.module.css";

const element = document.getElementById("signUp");

// サインアップ画面
const SignUp = () => (
  <div className={style.container}>
    <h1>Reversi</h1>
    <Menu isSignIn={false} isSignUp={true} />
    <Form action={""} method={""} autoComplete={""}>
      <RoundFrame className="round-frame_double">
        <TextInput
          title={EMAIL_LABEL}
          name={EMAIL}
          type={EMAIL}
          pattern={EMAIL_PATTERN}
        />
        <TextInput
          title={EMAIL_CONFIRM_LABEL}
          name={EMAIL_CONFIRM}
          type={EMAIL}
          pattern={EMAIL_PATTERN}
        />
      </RoundFrame>
      <div className={style.commonContainer}>
        <Button title={REGISTRATION_LABEL} type={SUBMIT} disabled={false} />
      </div>
    </Form>
  </div>
);

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <SignUp {...element?.dataset} />
  </React.StrictMode>
);
