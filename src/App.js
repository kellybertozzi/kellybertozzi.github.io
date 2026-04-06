import React from "react";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./pages/style.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <Projects />
      <Resume />
      <About />
      <Contact />
    </div>
  );
}

export default App;
