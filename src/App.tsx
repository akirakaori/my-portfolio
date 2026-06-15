import About from "./components/About";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.16),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(232,121,249,0.14),_transparent_25%),linear-gradient(180deg,_rgba(3,0,20,0.98),_rgba(8,15,38,1))]" />
      <main className="relative z-10">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
