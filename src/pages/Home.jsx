import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SectionSpacer from "../components/SectionSpacer";

const Home = () => {
    return (
      <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
  
        <Navbar />
  
        <main>
  
          <HeroSection />
  
  
          <AboutSection />
  
  
          <ProjectsSection />
  
          <SectionSpacer />
  
          <ServicesSection />
  
          <SectionSpacer />
  
          <ContactSection />
  
        </main>
  
        <Footer />
      </div>
    );
  };
  
  export default Home;