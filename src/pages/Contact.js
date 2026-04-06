import React, { useState } from "react";
import useFadeIn from "../hooks/useFadeIn";
import "./contact.css";

const contactMethods = [
  {
    icon: "fas fa-envelope",
    title: "Email",
    href: "mailto:kbertozzi21@gmail.com",
    label: "kbertozzi21@gmail.com",
  },
  {
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/kelly-ann-bertozzi/",
    label: "linkedin.com/in/kelly-ann-bertozzi",
    external: true,
  },
  {
    icon: "fab fa-github",
    title: "GitHub",
    href: "https://github.com/kellybertozzi",
    label: "github.com/kellybertozzi",
    external: true,
  },
];

function Contact() {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const [headerRef, headerVisible] = useFadeIn();
  const [formRef, formVisible] = useFadeIn(0.1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setSending(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/movklglp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="contact" className="container" aria-labelledby="contact-title">
      <div className="contact-container">
        <div
          ref={headerRef}
          className={`contact-header fade-in ${headerVisible ? "visible" : ""}`}
        >
          <span className="section-label">Contact</span>
          <h2 id="contact-title">Get In Touch</h2>
          <p>Have a question or want to work together? Send me a message!</p>
        </div>

        <div className="contact-methods" role="list">
          {contactMethods.map(({ icon, title, href, label, external }, i) => (
            <div
              className="contact-card"
              role="listitem"
              key={title}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <i className={icon} aria-hidden="true"></i>
              <h3>{title}</h3>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {label}
              </a>
            </div>
          ))}
        </div>

        <div
          ref={formRef}
          className={`contact-form fade-in ${formVisible ? "visible" : ""}`}
        >
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                required
              />
            </div>

            <div className="form-actions">
              <button
                className="submit-btn"
                type="submit"
                disabled={sending}
                aria-busy={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status === "success" && (
              <div className="status-message success" role="alert">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="status-message error" role="alert">
                Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
