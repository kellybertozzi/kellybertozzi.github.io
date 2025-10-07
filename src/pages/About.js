import React from "react";
import "./style.css";

function About() {
  return (
    <div className="container">
      <section id="about">
        <h2>About Me</h2>
        <div>
          <p>
            Hello! My name is Kelly Bertozzi, and I am a recent computer science
            graduate. I graduated from University of Massachusetts Boston with a
            Bachelor of Science in Computer Science in 2025, and have been
            looking for a new role since. During my time there, some of my
            favorite classes involved web development, artificial intelligence,
            and machine learning. Now that I've graduated, that's what I want to
            do in the real world!
          </p>
          <p>
            Before that, I lived on the Cape (where I'm from) and worked at
            Dunkin' for 5 years. And in my free time, I like to go on beach
            walks, make and drink coffee, cook, and do beautiful Gel-X nail sets
            (website coming soon).
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
