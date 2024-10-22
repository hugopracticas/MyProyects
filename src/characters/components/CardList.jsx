import React from "react";
import "../../styles/containerCard.css";

export const CardList = ({ characters }) => {
  return (
    <div className="card">
      {characters.map((character) => (
        <div key={character.id} className="cardCharacters">
          <h5>{character.name}</h5>
          <img
            src={character.img}
            alt={character.name}
            style={{ height: 200, width: 250 }}
          />
        </div>
      ))}
    </div>
  );
};
