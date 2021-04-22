import React from "react";
import LakeCard from "./LakeCard";
import Button from "./components/Button";

function LakeList({ lakesArr, onDeleteLake, searchTerm }) {
  const filteredLakes = lakesArr.filter((lakeObj) => {
    return lakeObj.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const lakeCards = filteredLakes.map((lake) => {
    return <LakeCard key={lake.id} lake={lake} onDeleteLake={onDeleteLake} Button={Button}/>;
  });
  return <div>{lakeCards}</div>;
}

export default LakeList;
