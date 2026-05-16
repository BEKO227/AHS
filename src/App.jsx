import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Rewards from "./pages/Rewards";
import ProjectDetails from "./pages/ProjectDetails";
import RewardDetails from "./pages/RewardDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/rewards/:id" element={<RewardDetails />} />

      </Routes>
    </>
  );
}

export default App;