import React from "react";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      {/* Render all pages stacked */}
      <Projects />
      <Resume />
      <About />
      <Contact />
    </div>
  );
}

export default App;
