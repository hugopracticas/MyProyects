import React from "react";

export const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id} className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <img
                  src={character.img}
                  alt={character.name}
                  style={{ height: 130, width: 130 }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
