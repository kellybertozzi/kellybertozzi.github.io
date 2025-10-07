import React from "react";
import "./style.css";
import "../resume.css";

function Resume() {
  return (
    <div>
      <div className="container">
        <div className="download-buttons">
          <a href="Resume.pdf" download className="btn">
            Download PDF
          </a>
        </div>

        <div className="resume-container">
          {/* Education Section */}
          <div className="resume-section">
            <h2>Education</h2>
            <div className="resume-item">
              <h3>University of Massachusetts, Boston</h3>
              <div className="date">Class of 2025</div>
              <p>Bachelor of Science in Computer Science</p>
              <p>
                Relevant Coursework: Data Structures and Algorithms, Programming
                in C, Applied Discrete Mathematics, Advanced Algorithms, Computer
                Architecture & Organization, Operating Systems, Artificial
                Intelligence, Machine Learning, Compilers
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="resume-section">
            <h2>Projects</h2>

            <div className="resume-item">
              <h3>
                <a href="http://kellybertozzi.github.io">
                  kellybertozzi.github.io - Personal Website
                </a>
              </h3>
              <div className="date">August 2025 - Current</div>
              <ul>
                <li>
                  Designed and developed a responsive personal website using HTML
                  and CSS to showcase my portfolio, resume, and contact
                  information
                </li>
                <li>
                  Planning to expand functionality with React.js for dynamic
                  content rendering, improved interactivity, and a blog section
                </li>
                <li>
                  Includes direct links to LinkedIn, GitHub, and email for easy
                  communication
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Gradelab - Educational Dashboard Webapp</h3>
              <div className="date">February 2024 - June 2024</div>
              <p>
                <em>Role: Developer/Team Member</em>
              </p>
              <ul>
                <li>
                  Collaborated with fellow Computer Science students to develop a
                  dashboard web application
                </li>
                <li>
                  Integrates educational course management software such as
                  Blackboard and Canvas to provide statistics, insights, and
                  predictions
                </li>
                <li>
                  Contributed to the design, development, and testing phases of
                  the project
                </li>
                <li>Used React.js, CSS, and Figma</li>
              </ul>
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-section">
            <h2>Experience</h2>

            <div className="resume-item">
              <h3>Dunkin' - Crew Member</h3>
              <div className="date">February 2022 - May 2025 | Boston, MA</div>
              <ul>
                <li>
                  Provided exceptional customer service, honing strong
                  communication skills
                </li>
                <li>Managed a fast-paced, high-pressure environment efficiently</li>
                <li>Timely and accurately handled customer orders</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Dunkin' - Shift Leader</h3>
              <div className="date">November 2019 - January 2025 | Bourne, MA</div>
              <ul>
                <li>
                  Promoted from crew member to shift leader for demonstrating
                  strong leadership
                </li>
                <li>
                  Implemented and improved operational procedures to enhance team
                  performance
                </li>
                <li>
                  Maintained a safe and clean work environment with attention to
                  detail
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-section">
            <h2>Skills</h2>
            <div className="skills-list">
              <span className="skill-pill">HTML/CSS</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">Java</span>
              <span className="skill-pill">C</span>
              <span className="skill-pill">R</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">Problem Solving</span>
              <span className="skill-pill">Team Collaboration</span>
              <span className="skill-pill">Analytical Thinking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
