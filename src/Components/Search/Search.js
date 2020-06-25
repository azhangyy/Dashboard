import React from "react";
//import "./Search.css";
import "../Tag/Tag.css";

function Search(props) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search Tag Name..."
        onChange={props.handleInput}
      />
    </div>
  );
}
export default Search;
