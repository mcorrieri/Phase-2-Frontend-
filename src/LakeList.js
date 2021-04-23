import React from "react";
import LakeCard from "./LakeCard";
import Button from "./components/Button";
import styled from "styled-components";

function LakeList({ lakesArr, onDeleteLake, searchTerm, onDarkMode }) {
  const filteredLakes = lakesArr.filter((lakeObj) => {
    return lakeObj.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const lakeCards = filteredLakes.map((lake) => {
    return (
      <LakeCard
        key={lake.id}
        lake={lake}
        onDeleteLake={onDeleteLake}
        Button={Button}
        onDarkMode={onDarkMode}
      />
    );
  });
  return <Cards>{lakeCards}</Cards>;
}

export default LakeList;

const Cards = styled.div`
  margin: 0 space auto;
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;
