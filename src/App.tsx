import About from "./components/About";

import Contact from "./components/Contact";
import Sustact from "./components/Sustact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.16),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(232,121,249,0.14),_transparent_25%),linear-gradient(180deg,_rgba(3,0,20,0.98),_rgba(8,15,38,1))]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
        <Sustact />
      </main>
      <Footer />
    </div>
  );
}
