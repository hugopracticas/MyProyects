import React from "react";

export const Loading = () => {
  return (
    <div>
      <h1>Loading...</h1>
      <img
        src={require("../../images/Demon.png")}
        alt="demon"
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
};
