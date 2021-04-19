import React, { useState } from "react";
import LakePersonList from "./LakePersonList";
import LakeList from "./LakeList";
import AddLake from "./AddLake";
import Search from "./Search";

function Home({ lakesArr, onAddNewLake, onDeleteLake }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleUpdatedSearch(newSearch) {
    setSearchTerm(newSearch);
  }

  return (
    <div>
      <Search searchTerm={searchTerm} onUpdatedSearch={handleUpdatedSearch} />
      <AddLake onAddNewLake={onAddNewLake} />
      <LakeList
        lakesArr={lakesArr}
        onDeleteLake={onDeleteLake}
        searchTerm={searchTerm}
      />
      <LakePersonList />
    </div>
  );
}

export default Home;
