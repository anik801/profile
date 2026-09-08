export default function Timeline({ id, heading, entries }) {
  return (
    <section id={id} className="section">
      <h2 className="section-heading">{heading}</h2>
      <ol className="timeline">
        {entries.map((entry) => (
          <li className="timeline-entry" key={entry.title + entry.date}>
            <span className="timeline-node" aria-hidden="true" />
            <span className="timeline-date">{entry.date}</span>
            <div className="timeline-body">
              <h3>{entry.title}</h3>
              <p className="timeline-place">{entry.place}</p>
              {entry.detail && <p className="timeline-detail">{entry.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
