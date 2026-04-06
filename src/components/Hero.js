import React, { useState, useEffect } from "react";
import "./Hero.css";

const titles = [
  "Computer Science Graduate",
  "Web Developer",
  "Machine Learning Enthusiast",
  "Problem Solver",
];

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      deleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Kelly Bertozzi</h1>
        <div className="hero-title-wrapper">
          <span className="hero-title">
            {titles[titleIndex].substring(0, charIndex)}
          </span>
          <span className="hero-cursor">|</span>
        </div>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <i className="fas fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    </section>
  );
}

export default Hero;
