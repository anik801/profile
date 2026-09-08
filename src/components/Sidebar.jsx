import photo from "../assets/images/anik.jpg";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#updates", label: "Updates" },
  { href: "#students", label: "Students" },
  { href: "#publications", label: "Publications" },
  { href: "#teaching", label: "Teaching" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

export default function Sidebar() {
  return (
    <header className="sidebar">
      <div className="sidebar-identity">
        {/* <span className="sidebar-node" aria-hidden="true" /> */}
        <img
          className="sidebar-photo"
          src={photo}
          alt="Sheik Murad Hassan Anik"
        />
        <h1 className="sidebar-name">Sheik Anik</h1>
        <p className="sidebar-title">
          Assistant Professor, Computer Science
          <br />
          Auburn University at Montgomery
        </p>
      </div>

      <nav className="sidebar-nav" aria-label="Section navigation">
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="sidebar-links">
        <li className="sidebar-contact">
          <span className="sidebar-label">Office Location</span>
          <br />
          7400 East Dr. (GH 310-I)
          <br />
          Montgomery, AL 36117
        </li>
        <li className="sidebar-email">
          <span className="sidebar-label">Email: </span>
          <a href="mailto:sanik1@aum.edu">sanik1@aum.edu</a>
        </li>
        <li className="sidebar-divider" aria-hidden="true"></li>
        <li>
          <a
            href="https://www.linkedin.com/in/anik801"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://orcid.org/0000-0003-2384-871X"
            target="_blank"
            rel="noreferrer"
          >
            ORCID
          </a>
        </li>
        <li>
          <a
            href="https://scholar.google.com/citations?user=u0IF9gUAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar
          </a>
        </li>
      </ul>
    </header>
  );
}
