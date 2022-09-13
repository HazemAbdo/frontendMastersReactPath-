import React from "react";
import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div>
      {/* conditional rendering */}
      {!pets.length ? (
        <h2>Pets are not found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
