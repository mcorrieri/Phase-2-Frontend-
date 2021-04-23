import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./components/Button";
import styled from "styled-components";

function LakeCard({ lake, onDeleteLake, onDarkMode }) {
  const { id, name, image } = lake;

  function handleDeleteLake() {
    fetch(`http://localhost:3000/lakes/${id}`, {
      method: "DELETE",
    });
    onDeleteLake(lake);
  }

  return (
    <div className={onDarkMode ? "Card" : "Card light"}>
      <Title>{name}</Title>
      <LakeImg src={image} alt={name} />
      <Button>
        <NavLink className="button" to={`lakes/${id}`}>
          View Lake Details
        </NavLink>
      </Button>
      <TrashButton onClick={handleDeleteLake}>🗑️</TrashButton>
    </div>
  );
}

export default LakeCard;

const LakeImg = styled.img`
  width: 100%;
  max-width: 400px;
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
`;

const TrashButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: darkblue;
  border: none;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  width: 50px;
  position: relative;
  left: 220px;
  text-align: center;

  &:hover {
    background-color: red;
    color: white;
  }
`;
