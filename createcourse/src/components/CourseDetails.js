import React from "react";

function CourseInfo({ course, onAdd }) {
  return (
    <div className="cont">
      <div className="btns">
        <button className="category">{course.category}</button>
        <button className="lessons">Lessons: {course.lessonCount}</button>
        <button className="edit-btn" onClick={onAdd}>Edit Course</button>
      </div>
      <div className="course-title">
        <h1>{course.courseTitle}</h1>
      </div>
      <div className="all-lessons">
        {course.lessons.map((el) => {
          return (
            <div className="lesson-cont" key={el.lessonId}>
              <p>{el.title}</p>
              <button>{el.type}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CourseDetails({ course, onAdd }) {
  return (
    <>
      {!course ? (
        <div className="cont">
          <div className="btn">
            <button className="add-btn" onClick={onAdd}>
              Add Course
            </button>
          </div>
          <p className="not-avail">No Course Available</p>
        </div>
      ) : (
        <CourseInfo course={course} onAdd={onAdd} />
      )}
    </>
  );
}

export default CourseDetails;
