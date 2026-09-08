import { currentStudents, alumni } from "../data/students.js";

export default function Students() {
  return (
    <section id="students" className="section">
      <h2 className="section-heading">Current Students</h2>
      <ul className="student-list">
        {currentStudents.map((student) => (
          <li className="student-entry" key={student.name}>
            <span className="student-name">{student.name}</span>
            <span className="student-meta">[{student.program}, {student.joiningDate}]</span>
            <a
              className="student-email"
              href={`mailto:${student.email}`}
              aria-label={`Email ${student.name}`}
              title={`Email ${student.name}`}
            >
              ✉
            </a>
          </li>
        ))}
      </ul>

      {alumni.length > 0 && (
        <>
          <h3 className="subsection-heading">Alumni</h3>
          <ul className="student-list">
            {alumni.map((student) => (
              <li className="student-entry" key={student.name}>
                <span className="student-name">{student.name}</span>
                <span className="student-meta">[{student.program}, {student.joiningDate}]</span>
                <a
                  className="student-email"
                  href={`mailto:${student.email}`}
                  aria-label={`Email ${student.name}`}
                  title={`Email ${student.name}`}
                >
                  ✉
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
