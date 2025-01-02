import React from "react";
import "./styles.css";

const Projects = () => {
  const projects = [
    {
      title: "HeyJob",
      description: "A platform to connect freelancers and clients in Nepal.",
      github: "https://github.com/shresthasusan/hey-job",
    },
    {
      title: "Acme",
      description: "An e-commerce website for seamless online shopping.",
      github: "https://github.com/Sujit-Thapa/nextjs-dashboard",
    },
    {
      title: "Chat App",
      description: "A real-time messaging application with React and Firebase.",
      github: "https://github.com/Sujit-Thapa/chat-app",
    },
  ];

  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
