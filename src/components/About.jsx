const INTERESTS = [
  "Distributed Data Infrastructure",
  "Software Engineering",
  "Internet of Things",
  "Machine Learning Applications",
  "Smart Home Systems",
];

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-lead">
        I'm an Assistant Professor of Computer Science at Auburn University at Montgomery. I completed my Ph.D. and M.Sc. in Computer Science and Applications from Virginia Tech, advised by Dr. Na Meng and Dr. Xinghua Gao. My research centers on the development and utilization of distributed data infrastructure for smart home and IoT systems.
      </p>

      <p className="research-interests">
        <span className="research-interest-label">Areas of Interest:</span>{" "}
        {INTERESTS.join(", ")}
      </p>
    </section>
  );
}
