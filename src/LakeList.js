import React from "react";
import LakeCard from "./LakeCard";

function LakeList({ lakesArr }) {
  const lakeCards = lakesArr.map((lake) => {
    return <LakeCard key={lake.id} lake={lake} />;
  });
  return <div>{lakeCards}</div>;
}

export default LakeList;
