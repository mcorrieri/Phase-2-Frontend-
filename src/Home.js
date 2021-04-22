import React, { useState } from "react";
import LakePersonList from "./LakePersonList";
import LakeList from "./LakeList";
// import AddLake from "./AddLake";
import Search from "./Search";
import { Link } from "react-router-dom";
// import Button from "./components/Button";
import styled from "styled-components";

function Home({ lakesArr, onDeleteLake }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleUpdatedSearch(newSearch) {
    setSearchTerm(newSearch);
  }

  return (
    <div>
      <LogOutButton>
        <Link to={"/"}>Log Out</Link>
      </LogOutButton>
      <LogOutButton>
        <Link to={"/newlake"}>Add New Lake</Link>
      </LogOutButton>
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

const LogOutButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  position: relative;
  left: 100%;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
