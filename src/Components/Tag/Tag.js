import React from "react";
import "./Tag.css";

function Tag(props) {
  function handleClick() {
    //handle double click
    if (props.activeTag === props.tags) {
      props.setActiveTag("");
    } else {
      //handle single click
      props.setActiveTag(props.tags);
    }
  }

  return (
    <div onClick={handleClick} className="tag">
      {props.tags}
      <span> | </span>
      {props.count}
    </div>
  );
}
export default Tag;
