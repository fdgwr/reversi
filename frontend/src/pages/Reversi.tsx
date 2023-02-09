import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");

// リバーシ画面
const Reversi = () => {
  return <div>Reversi</div>;
};

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <Reversi {...element?.dataset} />
  </React.StrictMode>
);
