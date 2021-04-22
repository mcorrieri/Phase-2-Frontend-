import React, { useState } from "react";
import LakePersonList from "./LakePersonList";
import LakeList from "./LakeList";
// import AddLake from "./AddLake";
import Search from "./Search";
import { Link } from "react-router-dom";
import Button from "./components/Button";


function Home({ lakesArr, onDeleteLake }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleUpdatedSearch(newSearch) {
    setSearchTerm(newSearch);
  }

  return (
    <div>
      <Button>
        <Link to={"/"}>Log Out</Link>
      </Button>
      <Button>
        <Link to={"/newlake"}>Add New Lake</Link>
      </Button>
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
