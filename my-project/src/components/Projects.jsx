// components/Projects.jsx
import React from "react";
import "./styles.css";

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "Description of project 1." },
    { title: "Project 2", description: "Description of project 2." },
    { title: "Project 3", description: "Description of project 3." },
  ];

  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
