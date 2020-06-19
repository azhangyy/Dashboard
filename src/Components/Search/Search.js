import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Tag Name..."
        onChange={props.handleInput}
      />
    </div>
  );
}
export default Search;
