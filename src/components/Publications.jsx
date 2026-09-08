import { publications } from "../data/publications.js";

function groupByYear(items) {
  const years = [...new Set(items.map((p) => p.year))].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    items: items.filter((p) => p.year === year),
  }));
}

export default function Publications() {
  const groups = groupByYear(publications);

  return (
    <section id="publications" className="section">
      <h2 className="section-heading">Publications</h2>
      <p className="section-note">
        More details can be found on{" "}
        <a
          href="https://scholar.google.com/citations?user=u0IF9gUAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Google Scholar
        </a>
        .
      </p>

      {groups.map((group) => (
        <div className="pub-year-group" key={group.year}>
          <span className="pub-year">{group.year}</span>
          <ul className="pub-list">
            {group.items.map((pub) => (
              <li className="pub-entry" key={pub.title}>
                <p className="pub-title">
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noreferrer">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </p>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">
                  {pub.venue}
                  <span className="pub-type">{pub.type}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
