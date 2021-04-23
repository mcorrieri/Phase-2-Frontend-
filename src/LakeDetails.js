import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./components/Button";
import styled from "styled-components";

function LakeDetails() {
  const [haveVisited, setHaveVisited] = useState(false);
  const [lake, setLake] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/lakes/${id}`)
      .then((res) => res.json())
      .then((lake) => {
        setLake(lake);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { name, image, location, description, link } = lake;

  return (
    <LakeDetailsDiv>
      <title>{name}</title>
      <LakeDetailImg src={image} alt={name} />
      <h3>Location: {location}</h3>
      <p>Comments: {description}</p>
      <Button onClick={() => setHaveVisited(!haveVisited)}>
        {haveVisited ? "Down to Visit 😏" : "No thanks 🙄"}
      </Button>
      <a href={link}>More Info</a>
    </LakeDetailsDiv>
  );
}

export default LakeDetails;

const LakeDetailsDiv = styled.div`
  text-align: center;
  margin: 10% auto auto auto;
`;

const LakeDetailImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
`;
