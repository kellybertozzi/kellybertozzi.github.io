import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-name">Kelly Ann Bertozzi</p>
        <div className="footer-links">
          <a
            href="https://github.com/kellybertozzi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kelly-ann-bertozzi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:kbertozzi21@gmail.com" aria-label="Email">
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <p className="footer-copy">
          Built with React &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
