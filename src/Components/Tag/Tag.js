import React from "react";
import "./Tag.css";

function Tag(unique, props) {
  function handleClick() {
    //handle double click and single click
    if (props.activeTag === unique.tags) {
      props.setActiveTag("");
    } else {
      props.setActiveTag(unique.tags);
    }
  }

  return (
    <div onClick={handleClick} className="tag">
      {unique.tags}
      <span> | </span>
      {unique.count}
    </div>
  );
}
export default Tag;
