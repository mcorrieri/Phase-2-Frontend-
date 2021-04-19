import React from "react";

function Search({ searchTerm, onUpdatedSearch }) {
  return (
    <div>
      <label>Search Lakes</label>
      <input
        type="text"
        id="search"
        placeholder="Choose your romantic lake..."
        value={searchTerm}
        onChange={(e) => onUpdatedSearch(e.target.value)}
      />
    </div>
  );
}
export default Search;
