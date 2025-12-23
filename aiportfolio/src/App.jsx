import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import SkillsExperience from "./components/sections/SkillsExperience";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsExperience/>
       <Contact />
       <Footer/>
    </div>
  );
}
