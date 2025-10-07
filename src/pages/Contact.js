import React from "react";
import "./contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <div className="container">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have a question or want to work together? Send me a message!</p>
        </div>

        <div className="contact-methods">
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:kbertozzi21@gmail.com">kbertozzi21@gmail.com</a>
          </div>

          <div className="contact-card">
            <i className="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/kelly-ann-bertozzi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/kelly-ann-bertozzi
            </a>
          </div>

          <div className="contact-card">
            <i className="fab fa-github"></i>
            <h3>GitHub</h3>
            <a
              href="https://github.com/kellybertozzi"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/kellybertozzi
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form
            action="https://formspree.io/f/movklglp"
            method="POST"
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message..." required />
            </div>

            <div className="form-actions">
              <button className="submit-btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
