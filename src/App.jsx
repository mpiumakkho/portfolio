import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
