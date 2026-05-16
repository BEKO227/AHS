import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Rewards from "./pages/Rewards";
import ProjectDetails from "./pages/ProjectDetails";
import RewardDetails from "./pages/RewardDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="pt-20 md:pt-24"> {/* ADD THIS */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/rewards/:id" element={<RewardDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;