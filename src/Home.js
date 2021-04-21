import React, { useState } from "react";
import LakePersonList from "./LakePersonList";
import LakeList from "./LakeList";
// import AddLake from "./AddLake";
import Search from "./Search";
import { Link } from "react-router-dom";

function Home({ lakesArr, onDeleteLake }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleUpdatedSearch(newSearch) {
    setSearchTerm(newSearch);
  }

  return (
    <div>
      <button>
        <Link to={"/"}>Log Out</Link>
      </button>
      <button>
        <Link to={"/newlake"}>Add New Lake</Link>
      </button>
      <Search searchTerm={searchTerm} onUpdatedSearch={handleUpdatedSearch} />
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
