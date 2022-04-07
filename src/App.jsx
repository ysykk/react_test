import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const testAlert = () => alert();
  return (
    <>
      <h1 style={{ backgroundColor: "rgb(255, 0, 0)" }}>こんにちは</h1>
      <ColorfulMessage />
      <button onClick={testAlert}>送信</button>
    </>
  );
};

export default App;
