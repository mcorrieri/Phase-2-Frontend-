import React from "react";
import { Link } from "react-router-dom";

function LakeCard({ lake, onDeleteLake }) {
  const { id, name, image} = lake;

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
      <p>
      <Link to={`lakes/${id}`}>View Lake Details</Link>
      </p>
      <button onClick={handleDeleteLake}>🗑️</button>
    </div>
  );
}

export default LakeCard;
