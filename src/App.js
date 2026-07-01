import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Project from "./Pages/Project";
import SideQuest from "./Pages/SideQuest";
import Certificate from "./Pages/Certificate";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/sidequest" element={<SideQuest />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;