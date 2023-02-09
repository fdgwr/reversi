import React from "react";
import ReactDOM from "react-dom/client";
import {
  BUTTON,
  EMAIL,
  EMAIL_CONFIRM,
  EMAIL_CONFIRM_LABEL,
  EMAIL_LABEL,
  EMAIL_PATTERN,
  REGISTRATION_LABEL,
} from "@/assets/message";
import { Button, Form, Menu, RoundFrame, TextInput } from "@/components";
import style from "@/assets/css/style.module.css";

const element = document.getElementById("signUp");

// サインアップ画面
const SignUp = () => (
  <div className={style.container}>
    <h1>Reversi</h1>
    <Menu isSignIn={false} isSignUp={true} />
    <RoundFrame className="round-frame_double">
      <Form action={""} method={""} autoComplete={""}>
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
        <div className={style.commonContainer}>
          <Button title={REGISTRATION_LABEL} type={BUTTON} disabled={false} />
        </div>
      </Form>
    </RoundFrame>
  </div>
);

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <SignUp {...element?.dataset} />
  </React.StrictMode>
);
