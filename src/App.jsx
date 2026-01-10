import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications"; // Matches sidebar
import SoftSkills from "./components/SoftSkills"; // Matches sidebar
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white scroll-smooth selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <main className="flex flex-col">
        <About />
        <Education /> 
        <Skills />
        <Experience /> 
        <Projects /> 
        <Certifications /> 
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}