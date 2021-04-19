import React, { useState } from "react";

function LakeCard({ lake, onDeleteLake }) {
  const { id, name, image, location, description, wantToVisit, link } = lake;
  const [haveVisited, setHaveVisited] = useState(false);

  function handleDeleteLake() {
    fetch(`http://localhost:3000/lakes/${id}`, {
      method: "DELETE",
    });
    onDeleteLake(lake);
  }

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>{location}</h3>
      <p>{description}</p>
      <button onClick={() => setHaveVisited(!haveVisited)}>
        {haveVisited ? "Down to Visit 😏" : "No thanks🙄"}
      </button>
      <button onClick={handleDeleteLake}>🗑️</button>
      <a href={link}>More Info</a>
    </div>
  );
}

export default LakeCard;
