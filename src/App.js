import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import AnimatedHearts from "./components/AnimatedHearts";
import "./pages/style.css";
import "./App.css";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [navScrolled, setNavScrolled] = useState(false);
  const [heartCount, setHeartCount] = useState(20);

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      return observer;
    });

    const handleScroll = () => {
      setNavScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <AnimatedHearts count={heartCount} />
      <ScrollProgress />
      <BackToTop />
      <div className="heart-settings">
        <label htmlFor="heartCount">
          Heart density
          <span>{heartCount}</span>
        </label>
        <input
          id="heartCount"
          type="range"
          min="10"
          max="80"
          step="5"
          value={heartCount}
          onChange={(e) => setHeartCount(Number(e.target.value))}
        />
      </div>
      <a className="skip-link" href="#projects">
        Skip to main content
      </a>
      <nav
        className={`navbar ${navScrolled ? "navbar-scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#hero" className="nav-brand">
          KB
        </a>
        <div className="nav-links">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              aria-current={activeSection === id ? "true" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
      <main>
        <Hero />
        <Projects />
        <Resume />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
