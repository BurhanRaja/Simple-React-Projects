import React, { useState } from "react";
import AddCourse from "./AddCourse";
import CourseDetails from "./CourseDetails";

function Main() {
  const [course, setCourse] = useState(null);
  const [isShowBuilder, setIsShowBuilder] = useState(false);

  return (
    <section>
      <div className="container">
        <div className="course-overview">
          <p>Course Overview</p>
        </div>
        {isShowBuilder ? (
          <AddCourse course={course} onCancel={() => setIsShowBuilder(false)} />
        ) : (
          <CourseDetails
            course={course}
            onCreate={() => setIsShowBuilder(true)}
          />
        )}
      </div>
    </section>
  );
}

export default Main;
