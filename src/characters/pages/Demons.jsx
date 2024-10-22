import React, { useEffect, useState } from "react";
import { getCharacters } from "../data/getCharacters";
import { CardContainer } from "../components";
import text from "../../config/text.json";
import { Buttons } from "../components/Buttons";

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
    const result = content.filter((human) => human.race === text.demon);
    setCharacters(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [counter]);

  const dataInformation = {
    race: text.demons,
    isLoading,
    characters,
  };

  return (
    <div>
      <CardContainer dataInformation={dataInformation} />
      <Buttons increment={increment} decrement={decrement} />
      <p>{counter}</p>
    </div>
  );
};
