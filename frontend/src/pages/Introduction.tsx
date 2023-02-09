import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Button, Form, IntroTextInput, RoundFrame } from "@/components";
import style from "@/assets/css/style.module.css";
import {
  BUTTON,
  CREATE_ROOM_BUTTON,
  JOIN_ROOM_BUTTON,
  SECRET_WORD,
  SECRET_WORD_LABEL,
  TEXT,
} from "@/assets/message";

const element = document.getElementById("intro");

const Introduction = () => {
  // ボタンに応じてアクションのURLを変更する。
  const [action, setAction] = useState<string>("");

  return (
    <div className={`${style.container} ${style.intro}`}>
      <RoundFrame className="round-frame_double">
        <p>ルール説明？</p>
      </RoundFrame>
      <Form action={action} method={""} autoComplete={""}>
        <IntroTextInput
          title={SECRET_WORD_LABEL}
          name={SECRET_WORD}
          type={TEXT}
          pattern=""
        />
        <div className={`${style.commonContainer} ${style.introContainer}`}>
          <Button
            title={CREATE_ROOM_BUTTON}
            type={BUTTON}
            disabled={false}
            onClick={() => setAction("")}
          />
          <Button
            title={JOIN_ROOM_BUTTON}
            type={BUTTON}
            disabled={false}
            onClick={() => setAction("")}
          />
        </div>
      </Form>
    </div>
  );
};

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <Introduction {...element?.dataset} />
  </React.StrictMode>
);
