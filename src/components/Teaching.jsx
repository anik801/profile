import { graduateCourses, undergraduateCourses } from "../data/teaching.js";

function renderCourseList(courses) {
  return (
    <ul className="course-list">
      {courses.map((course) => (
        <li key={`${course.name}-${course.terms.join("-")}`} className="course-item">
          <span className="course-name">{course.name}</span>
          {course.terms.length > 0 && (
            <span className="course-terms"> [{course.terms.join(", ")}]</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Teaching() {
  return (
    <section id="teaching" className="section">
      <h2 className="section-heading">Teaching</h2>

      <div className="teaching-group">
        <h3 className="subsection-heading teaching-heading">Graduate Courses</h3>
        {renderCourseList(graduateCourses)}
      </div>

      <div className="teaching-group">
        <h3 className="subsection-heading teaching-heading">Undergraduate Courses</h3>
        {renderCourseList(undergraduateCourses)}
      </div>
    </section>
  );
}
