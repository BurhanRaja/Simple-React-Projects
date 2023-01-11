import React, { useState } from "react";
import {v4 as uuid} from "uuid";

function AddLesson({ onAdd, onShow }) {
  
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonType, setLessonType] = useState("Text");

  console.log(lessonTitle);

  return (
    <div>
      <div className="course-lesson">
        <input
          type="text"
          placeholder="Enter Lesson Title"
          value={lessonTitle}
          onChange={(e) => setLessonTitle(e.target.value)}
        />
      </div>
      <div className="lesson-cat">
        <select
          className="select-cat"
          value={lessonType}
          onChange={(e) => setLessonType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Video">Video</option>
          <option value="Audio">Audio</option>
        </select>
      </div>
      <button
        className="submit-btn"
        onClick={() => {
          onAdd({
            lessonId: uuid(),
            lessonTitle,
            lessonType,
          });
          setLessonTitle("");
          setLessonType("Text");
          onShow();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default AddLesson;
