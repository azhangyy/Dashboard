import React from "react";
import Tag from "/Users/angela/Documents/GitHub/Dashboard/src/Components/Tag/Tag.js";

function TagList(props) {
  return (
    <div className="flex-container">
      {props.filterTopic.map(([key, value], idx) => (
        <Tag key={idx} tags={key} count={value} />
      ))}
    </div>
  );
}

export default TagList;