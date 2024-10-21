import React from "react";
import text from "../../config/text.json";

export const Buttons = ({ increment, decrement }) => {
  return (
    <div>
      <button className="btn btn-outline-success" onClick={increment}>
        {text.next}
      </button>
      <button className="btn btn-outline-success" onClick={decrement}>
        {text.previous}
      </button>
    </div>
  );
};
