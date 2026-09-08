export default function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <h2 className="section-heading">Contact</h2>
      <p>
        7400 East Dr. (GH 310-I)
        <br />
        Montgomery, AL 36117
      </p>
      <p>
        <a href="mailto:sanik1@aum.edu">sanik1@aum.edu</a>
      </p>
      <footer className="footer">
        © {new Date().getFullYear()} Sheik Murad Hassan Anik
      </footer>
    </section>
  );
}
