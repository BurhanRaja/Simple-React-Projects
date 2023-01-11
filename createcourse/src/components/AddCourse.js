import React, { useReducer, useState } from "react";
import AddLesson from "./AddLesson";
import {v4 as uuid} from "uuid";

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
        lessonCount: state.lessonCount + 1,
        lessons: [
          ...state.lessons,
          {
            lessonId: action.lesson.lessonId,
            title: action.lesson.lessonTitle,
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

function AddCourse({ onCancel, course, onCreate }) {
  const [state, dispatch] = useReducer(courseReducer, course, initState);

  console.log(state.lessons);

  const [addLesson, setAddLesson] = useState(false);
  return (
    <div className="add-course-form">
      <div className="course-title">
        <input
          type="text"
          placeholder="Enter Title"
          value={state.courseTitle}
          onChange={(e) =>
            dispatch({
              type: "SET_TITLE",
              title: e.target.value,
            })
          }
        />
      </div>
      <div className="course-cat">
        <select
          className="select-cat"
          value={state.category}
          onChange={(e) =>
            dispatch({
              type: "SET_CATEGORY",
              category: e.target.value,
            })
          }
        >
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
      {addLesson && (
        <AddLesson
          onShow={() => setAddLesson(false)}
          onAdd={(lesson) =>
            dispatch({
              type: "ADD_LESSON",
              lesson,
            })
          }
        />
      )}
      <div>
        {state.lessons.map((el) => {
          return (
            <div className="lesson-cont" key={el.lessonId}>
              <p>{el.title}</p>
              <button
                className=""
                onClick={() =>
                  dispatch({
                    type: "DELETE_LESSON",
                    lessonId: el.lessonId,
                  })
                }
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <button onClick={() => (state.courseTitle ? onCreate(state) : null)}>
          Submit
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default AddCourse;
