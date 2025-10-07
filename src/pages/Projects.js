import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="project-grid">
        {/* Card 1 */}
        <div className="project-card">
          <h2>Personal Website</h2>
          <p>(You're viewing it right now!)</p>
          <ul>
            <li>Showcases my technical skills and projects</li>
            <li>Provides easy access to my resume and contact info</li>
            <li>Built with React</li>
          </ul>
          <a
            href="https://github.com/kellybertozzi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View on GitHub
          </a>
        </div>

        {/* Card 2 */}
        <div className="project-card">
          <h2>Coffee Recommender System</h2>
          <p>
            A machine learning system that recommends coffee orders based on
            user taste preferences.
          </p>
          <ul>
            <li>Uses Python + scikit-learn</li>
            <li>Collects user data from a form</li>
            <li>Future goal: turn into full web app</li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/kellybertozzi/Coffee-Predictor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View GitHub Repo
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdbjTDsNUpGkDVe16YCZnQijyd_brzYEHx-QObPVbzlJ85mYg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Taste Preference Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

