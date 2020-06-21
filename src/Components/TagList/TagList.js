import React from "react";
import Tag from "../Tag/Tag.js";

function TagList(props) {
  return (
    <div className="flex-container">
      {props.filterTopic.map(([key, value], idx) => (
        <Tag
          key={idx}
          tags={key}
          count={value}
          activeTag={props.activeTag}
          setActiveTag={props.setActiveTag}
        />
      ))}
    </div>
  );
}

export default TagList;
