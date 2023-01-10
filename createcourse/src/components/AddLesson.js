import React from "react";

function AddLesson({onAdd}) {
  return (
    <div>
      <div className="course-lesson">
        <input type="text" placeholder="Enter Lesson Title" />
      </div>
      <div className="lesson-cat">
        <select className="select-cat">
          <option value="UI/UX">UI/UX</option>
          <option value="Javascript">JavaScript</option>
          <option value="PHP">PHP</option>
          <option value="Database">Database</option>
          <option value="Node.js">Node.js</option>
        </select>
      </div>
      <button className="submit-btn" onClick={onAdd}>Submit</button>
    </div>
  );
}

export default AddLesson;
