import React, { useState } from "react";
import text from "../../config/text.json";

export const Buttons = ({ increment, decrement }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <button className="btn btn-outline-success" onClick={decrement}>
        {text.previous}
      </button>
      <button className="btn btn-outline-success" onClick={increment}>
        {text.next}
      </button>
    </div>
  );
};
