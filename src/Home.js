import React from "react";
import LakePersonList from "./LakePersonList";
import LakeList from "./LakeList";
import AddLake from "./AddLake";

function Home({ lakesArr, onAddNewLake, onDeleteLake }) {
  return (
    <div>
      <AddLake onAddNewLake={onAddNewLake} />
      <LakeList lakesArr={lakesArr} onDeleteLake={onDeleteLake}/>
      <LakePersonList />
    </div>
  );
}

export default Home;
