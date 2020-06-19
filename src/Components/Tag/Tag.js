import React from "react";
import "./Tag.css";

function Tag(unique, props) {
  return (
    <div className="tag">
      <button>
        {unique.tags}
        <span> | </span>
        {unique.count}
      </button>
    </div>
  );
}
export default Tag;
