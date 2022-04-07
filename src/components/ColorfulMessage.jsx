import React from "react";

const ColorfulMessage = () => {
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>元気です！</p>
      <p>元気です！</p>
    </>
  );
};

export default ColorfulMessage;
