import React from "react";
import LakeCard from "./LakeCard";

function LakeList({ lakesArr, onDeleteLake }) {
  const lakeCards = lakesArr.map((lake) => {
    return <LakeCard key={lake.id} lake={lake} onDeleteLake={onDeleteLake}/>;
  });
  return <div>{lakeCards}</div>;
}

export default LakeList;
