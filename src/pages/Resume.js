import React from "react";
import useFadeIn from "../hooks/useFadeIn";
import "./style.css";
import "../resume.css";

const education = [
  {
    school: "University of Massachusetts, Boston",
    date: "Class of 2025",
    degree: "Bachelor of Science in Computer Science",
    coursework:
      "Data Structures and Algorithms, Programming in C, Applied Discrete Mathematics, Advanced Algorithms, Computer Architecture & Organization, Operating Systems, Artificial Intelligence, Machine Learning, Compilers",
  },
];

const resumeProjects = [
  {
    title: "Coffee Preferences Form",
    url: "https://coffee-form-three.vercel.app/",
    date: "January 2026 - Current",
    bullets: [
      "Designed and implemented a responsive, multi-step web form to collect structured user input (e.g., sweetness, creaminess, flavor preferences), simulating real-world data intake systems.",
      "Built and maintained a full-stack data pipeline using Supabase to securely store, retrieve, and manage user data.",
      "Integrated frontend application with backend services and APIs to enable real-time data flow and processing.",
      "Applied validation, structured data handling, and scalable design patterns relevant to enterprise systems.",
    ],
  },
  {
    title: "Coffee Preference Predictor - Machine Learning Project",
    url: "https://github.com/kellybertozzi/Coffee-Predictor",
    date: "May 2025 - Current",
    bullets: [
      "Designing a feed-forward neural network to predict coffee type and flavor preferences based on user inputs.",
      "Implemented data preprocessing and feature encoding pipelines in Python.",
      "Evaluating model architectures and performance metrics to iteratively improve prediction accuracy.",
    ],
  },
  {
    title: "kellybertozzi.github.io - Personal Website",
    url: "https://kellybertozzi.github.io",
    date: "August 2025 - Current",
    bullets: [
      "Designed and developed a responsive personal website using React to showcase my portfolio, resume, and contact information",
      "Features dynamic content rendering, smooth navigation, and a contact form powered by Formspree",
      "Includes direct links to LinkedIn, GitHub, and email for easy communication",
    ],
  },
  {
    title: "Gradelab - Educational Dashboard Webapp",
    date: "February 2024 - June 2024",
    role: "Developer/Team Member",
    bullets: [
      "Collaborated with fellow Computer Science students to develop a dashboard web application",
      "Integrates educational course management software such as Blackboard and Canvas to provide statistics, insights, and predictions",
      "Contributed to the design, development, and testing phases of the project",
      "Used React.js, CSS, and Figma",
    ],
  },
];

const experience = [
  {
    title: "Ethos - Product Associate",
    date: "January 2025 - Present | Boston, MA",
    bullets: [
      "Supported daily operations using Dutchie (POS system), ensuring accurate transaction processing and system reliability.",
      "Managed backend system configurations including API key management and integration between METRC and Dutchie systems.",
      "Troubleshoot system issues and ensured proper data flow between platforms, improving operational efficiency.",
      "Collaborated with team members to optimize workflows and improve system usability in a fast-paced environment.",
    ],
  },
  {
    title: "Dunkin' - Crew Member",
    date: "February 2022 - May 2025 | Boston, MA",
    bullets: [
      "Provided exceptional customer service, honing strong communication skills",
      "Managed a fast-paced, high-pressure environment efficiently",
      "Timely and accurately handled customer orders",
    ],
  },
  {
    title: "Dunkin' - Shift Leader",
    date: "November 2019 - January 2025 | Bourne, MA",
    bullets: [
      "Promoted from crew member to shift leader for demonstrating strong leadership",
      "Implemented and improved operational procedures to enhance team performance",
      "Maintained a safe and clean work environment with attention to detail",
    ],
  },
];

const skills = [
  "HTML/CSS",
  "Python",
  "Java",
  "C",
  "R",
  "JavaScript",
  "React.js",
  "Problem Solving",
  "Team Collaboration",
  "Analytical Thinking",
];

function ResumeSection({ title, children, delay = 0 }) {
  const [ref, isVisible] = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className={`resume-section fade-in ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function Resume() {
  return (
    <div id="resume" aria-labelledby="resume-title">
      <div className="container">
        <div className="download-buttons">
          <a
            href={`${process.env.PUBLIC_URL}/Resume.pdf`}
            download
            className="btn"
            aria-label="Download resume as PDF"
          >
            Download PDF
          </a>
        </div>

        <div className="resume-container">
          <ResumeSection title="Education" delay={0}>
            {education.map((edu) => (
              <div className="resume-item" key={edu.school}>
                <h3>{edu.school}</h3>
                <div className="date">{edu.date}</div>
                <p>{edu.degree}</p>
                <p>Relevant Coursework: {edu.coursework}</p>
              </div>
            ))}
          </ResumeSection>

          <ResumeSection title="Projects" delay={0.1}>
            {resumeProjects.map((project) => (
              <div className="resume-item" key={project.title}>
                <h3>
                  {project.url ? (
                    <a href={project.url}>{project.title}</a>
                  ) : (
                    project.title
                  )}
                </h3>
                <div className="date">{project.date}</div>
                {project.role && (
                  <p>
                    <em>Role: {project.role}</em>
                  </p>
                )}
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeSection>

          <ResumeSection title="Experience" delay={0.2}>
            {experience.map((job) => (
              <div className="resume-item" key={job.title}>
                <h3>{job.title}</h3>
                <div className="date">{job.date}</div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeSection>

          <ResumeSection title="Skills" delay={0.3}>
            <div className="skills-list" role="list">
              {skills.map((skill) => (
                <span className="skill-pill" role="listitem" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </ResumeSection>
        </div>
      </div>
    </div>
  );
}

export default Resume;
