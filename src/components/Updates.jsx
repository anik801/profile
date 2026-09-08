import { updates } from "../data/updates.js";
let NUM_ITEM = 8;

function parseUpdateDate(dateString) {
  const [month, year] = dateString.split("/");
  return new Date(Number(year), Number(month) - 1, 1).getTime();
}

export default function Updates() {
  const recentUpdates = [...updates]
    .sort((a, b) => parseUpdateDate(b.date) - parseUpdateDate(a.date))
    .slice(0, NUM_ITEM);

  return (
    <section id="updates" className="section">
      <h2 className="section-heading">Updates</h2>
      <ul className="updates-list">
        {recentUpdates.map((item) => (
          <li key={`${item.date}-${item.event}`} className="update-item">
            <span className="update-date">{item.date}:</span>
            <span>{item.event}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
