import React, { useEffect, useState } from "react";
import { getCharacters, getCharactersByHumans } from "../data/getCharacters";
import { CardList, Loading, NothingToShow } from "../components";
import text from "../../config/text.json";
import { Buttons } from "../components/Buttons";

export const Humans = () => {
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
    const { content, pagination } = await getCharacters(counter);
    const result = content.filter((human) => human.race === text.human);

    setCharacters(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [counter]);

  return (
    <div>
      <h1>{text.humans}</h1>
      {isLoading ? (
        <Loading />
      ) : characters.length === 0 ? (
        <NothingToShow />
      ) : (
        <CardList characters={characters} />
      )}

      <Buttons increment={increment} decrement={decrement} />
      <p>{counter}</p>
    </div>
  );
};
