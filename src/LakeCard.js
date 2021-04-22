import React from "react";
import { Link } from "react-router-dom";
import Button from "./components/Button";
import styled from "styled-components";

function LakeCard({ lake, onDeleteLake }) {
  const { id, name, image } = lake;

  function handleDeleteLake() {
    fetch(`http://localhost:3000/lakes/${id}`, {
      method: "DELETE",
    });
    onDeleteLake(lake);
  }

  return (
    <LakeCardStyle>
      <Title>{name}</Title>
      <LakeImg src={image} alt={name} />
      <Button>
        <Link to={`lakes/${id}`}>View Lake Details</Link>
      </Button>
      <TrashButton onClick={handleDeleteLake}>🗑️</TrashButton>
    </LakeCardStyle>
  );
}

export default LakeCard;

const LakeCardStyle = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
  border: 3px solid black;
  background-color: lightseagreen;
`;

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
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  width: 50px;
  position: relative;
  left: 220px;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
