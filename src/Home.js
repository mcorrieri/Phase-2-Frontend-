import React from "react";
import LakePersonList from "./LakePersonList";
import LakeList from "./LakeList";
import AddLake from "./AddLake";

function Home({ lakesArr, onAddNewLake }) {
  return (
    <div>
      <AddLake onAddNewLake={onAddNewLake} />
      <LakeList lakesArr={lakesArr} onAddNewLake={onAddNewLake} />
      <LakePersonList />
    </div>
  );
}

export default Home;
