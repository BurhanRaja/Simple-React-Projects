import React, { useState } from "react";
import AddLesson from "./AddLesson";
import uuid from "uuid/v4";

const initState = (course) => {
  return !course
    ? {
        courseId: uuid(),
        courseTitle: "",
        category: "UI/UX",
        lessonCount: 0,
        lessons: [],
      }
    : course;
};

const courseReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        courseTitle: action.title,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.category,
      };
    case "ADD_LESSON":
      return {
        ...state,
        lessonCount: lessonCount + 1,
        lessons: [
          ...state.lessons,
          {
            lessonId: action.lesson.lessonId,
            title: action.lesson.title,
            type: action.lesson.lessonType,
          },
        ],
      };
    case "DELETE_LESSON":
      return {
        ...state,
        lessonCount: state.lessonCount - 1,
        lessons: state.lessons.filter((l) => l.lessonId !== action.lessonId),
      };
    default: {
      throw new Error("This action could not be handled!");
    }
  }
};

function AddCourse({ onCancel, course }) {
  const [addLesson, setAddLesson] = useState(false);
  const [lessons, setLessons] = useState([]);
  return (
    <div className="add-course-form">
      <div className="course-title">
        <input type="text" placeholder="Enter Title" />
      </div>
      <div className="course-cat">
        <select className="select-cat">
          <option value="UI/UX">UI/UX</option>
          <option value="Javascript">JavaScript</option>
          <option value="PHP">PHP</option>
          <option value="Database">Database</option>
          <option value="Node.js">Node.js</option>
        </select>
      </div>
      <div className="add-lessons">
        <p>Add Lesson</p>
        <button onClick={() => setAddLesson(true)}>Add</button>
      </div>
      {addLesson && <AddLesson onAdd={() => setAddLesson(false)} />}
      <div>
        {lessons.map((el) => {
          return <span>{el}</span>;
        })}
      </div>
      <div className="footer">
        <button>Submit</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default AddCourse;
