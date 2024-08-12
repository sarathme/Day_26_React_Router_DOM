import { useHref } from "react-router-dom";
import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  const url = useHref();
  console.log(url.slice(1));

  // Filtering courses using useHref Hook from react-router-dom
  const filteredCourse =
    url.slice(1) === "all"
      ? courses
      : courses.filter((course) => {
          return course.catogary.includes(url.slice(1));
        });

  return (
    <div className="grid-content">
      <h1>Course{url}</h1>
      <div className="course-list">
        {filteredCourse.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
