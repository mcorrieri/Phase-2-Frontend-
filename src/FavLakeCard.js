import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./components/Button";
import styled from "styled-components";

function FavLakeCard({ lake }) {
  const { id, name, image } = lake;
console.log(lake)
  return (
      <div className="Card light">
      <Title>{name}'s Favorite Lakes</Title>
      <LakeImg src={image} alt={name} />
      <br/>
      <Button>
        <NavLink className="button" to={`lakes/${id}`}>
          View Lake Details
        </NavLink>
      </Button>
    </div>
  );
}

export default FavLakeCard;

const LakeImg = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 200px;
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
`;


