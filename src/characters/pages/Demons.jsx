import React, { useEffect, useState } from "react";
import { getCharacters } from "../data/getCharacters";
import { CardList, Loading } from "../components";

export const Demons = () => {
  const [characters, setCharacters] = useState([]);
  const [counter, setCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const increment = () => {
    if (counter === 9) return;
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const getData = async () => {
    const { content } = await getCharacters(counter);
    const result = content.filter((human) => human.race === "Demon");
    setCharacters(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [counter]);

  return (
    <div>
      <h1>Demons</h1>
      {isLoading ? <Loading /> : <CardList characters={characters} />}

      <div>
        <button className="btn btn-outline-success" onClick={increment}>
          Next
        </button>
        <p>{counter}</p>
        <button className="btn btn-outline-success" onClick={decrement}>
          Previous
        </button>
      </div>
    </div>
  );
};
