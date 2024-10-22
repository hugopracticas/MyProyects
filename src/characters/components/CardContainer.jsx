import React from "react";
import { CardList, Loading, NothingToShow } from "./index";

export const CardContainer = ({ dataInformation }) => {
  const { race, isLoading, characters } = dataInformation;

  return (
    <div className="containerCard">
      <h1>{race}</h1>
      {isLoading ? (
        <Loading />
      ) : characters.length === 0 ? (
        <NothingToShow />
      ) : (
        <CardList characters={characters} />
      )}
    </div>
  );
};
