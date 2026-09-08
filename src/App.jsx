import Sidebar from "./components/Sidebar.jsx";
import About from "./components/About.jsx";
import Timeline from "./components/Timeline.jsx";
import Publications from "./components/Publications.jsx";
import Students from "./components/Students.jsx";
import Updates from "./components/Updates.jsx";
import Teaching from "./components/Teaching.jsx";
import { education, experience } from "./data/timeline.js";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <About />
        <Updates />
        <Students />
        <Publications />
        <Teaching />
        <Timeline id="experience" heading="Experience" entries={experience} />
        <Timeline id="education" heading="Education" entries={education} />
      </main>
    </div>
  );
}
