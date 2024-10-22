import React from "react";

export const Loading = () => {
  return (
    <div>
      <img
        src={require("../../images/Demon.png")}
        alt="demon"
        style={{ width: 410, height: 270 }}
      />
      <h1>Loading...</h1>
    </div>
  );
};
