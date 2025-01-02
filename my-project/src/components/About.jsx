import React from "react";
import "./styles.css";

const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>
        Hi, I'm Sujit Thapa, a passionate developer. I specialize in creating modern
        and user-friendly websites and applications.
      </p>
      <a 
        href="/CV.pdf" 
        download="Sujit_Thapa_CV" 
        className="download-btn"
      >
        Download My CV
      </a>
    </section>
  );
};

export default About;
