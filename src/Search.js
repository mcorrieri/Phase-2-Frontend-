import React from "react";
import styled from "styled-components";

function Search({ searchTerm, onUpdatedSearch }) {
  return (
    <SearchBar>
      <SearchLabel>Search Lakes:</SearchLabel>
      <SearchInput
        type="text"
        id="search"
        placeholder="Choose your romantic lake..."
        value={searchTerm}
        onChange={(e) => onUpdatedSearch(e.target.value)}
      />
    </SearchBar>
  );
}
export default Search;

const SearchBar = styled.div`
  text-align: center;
`;

const SearchLabel = styled.label`
  font-size: x-large;
  font-family: Garamond;
  font-weight: bold;
`;

const SearchInput = styled.input`
  width: 400px;
  border-radius: 25px;
  border-color: lightgray;
  height: 25px;
  margin: 15px;
  font-size: large;
  font-weight: bold;
  font-family: Garamond;
`;