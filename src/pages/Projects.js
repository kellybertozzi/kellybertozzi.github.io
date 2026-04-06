import React from "react";
import useFadeIn from "../hooks/useFadeIn";
import "./projects.css";

const projects = [
  {
    title: "Personal Website",
    icon: "fa-solid fa-laptop-code",
    description: "(You're viewing it right now!)",
    details: [
      "Showcases my technical skills and projects",
      "Provides easy access to my resume and contact info",
      "Built with React",
    ],
    links: [
      { label: "View on GitHub", url: "https://github.com/kellybertozzi" },
    ],
  },
  {
    title: "Coffee Recommender System",
    icon: "fa-solid fa-mug-saucer",
    description:
      "A machine learning system that recommends coffee orders based on user taste preferences.",
    details: [
      "Uses Python + scikit-learn",
      "Collects user data from a form",
      "Future goal: turn into full web app",
    ],
    links: [
      {
        label: "View GitHub Repo",
        url: "https://github.com/kellybertozzi/Coffee-Predictor",
      },
      {
        label: "Taste Preference Form",
        url: "https://coffee-form-three.vercel.app/",
      },
    ],
  },
];

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className={`project-card fade-in ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <h2>{project.title}</h2>
      <i className={`${project.icon} project-icon`} aria-hidden="true"></i>
      <p>{project.description}</p>
      <ul>
        {project.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div
        ref={ref}
        className={`fade-in ${isVisible ? "visible" : ""}`}
      >
        <span className="section-label">Portfolio</span>
        <h1 id="projects-title" className="projects-title">
          My Projects
        </h1>
        <p className="projects-subtitle">
          Here's what I've been working on
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
