function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src="https://placehold.co/200" alt="Course-img" />
      <h3>{course.name}</h3>
    </div>
  );
}

export default CourseCard;
