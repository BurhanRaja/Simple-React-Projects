import React from "react";
import { tags } from "../utils/tags";

function Tags({setTagName}) {
  return (
    <div>
      <div className="tags">
        {tags.map((el) => {
          return (
            <button className="tag-btn" key={el} onClick={() => setTagName(el)}>
              {el.charAt(0).toUpperCase() + el.substring(1)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tags;
