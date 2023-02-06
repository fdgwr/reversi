import React from "react";
import ReactDOM from "react-dom/client";
import { Button, IntroTextInput, RoundFrame } from "@/components";
import style from "@/assets/css/style.module.css";
import {
  BUTTON,
  CREATE_ROOM_BUTTON,
  JOIN_ROOM_BUTTON,
  SECRET_WORD,
  SECRET_WORD_LABEL,
  TEXT,
} from "@/assets/message";

const element = document.getElementById("introduction");

const Introduction = () => {
  return (
    <div className={`${style.container} ${style.intro}`}>
      <RoundFrame className="round-frame_double">
        <p>ルール説明？</p>
      </RoundFrame>
      <IntroTextInput
        title={SECRET_WORD_LABEL}
        name={SECRET_WORD}
        type={TEXT}
        pattern=""
        onChange={() => console.log("")}
      />
      <div className={`${style.commonContainer} ${style.introContainer}`}>
        <Button
          title={CREATE_ROOM_BUTTON}
          type={BUTTON}
          disabled={false}
          onClick={() => console.log("")}
        />
        <Button
          title={JOIN_ROOM_BUTTON}
          type={BUTTON}
          disabled={false}
          onClick={() => console.log("")}
        />
      </div>
    </div>
  );
};

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <Introduction {...element?.dataset} />
  </React.StrictMode>
);
