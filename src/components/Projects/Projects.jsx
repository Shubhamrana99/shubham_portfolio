import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/project.json";
import { getImageurl } from "../../utils";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project, i) => {
          return (
            <div key={i}>
              <img src={getImageurl(project.imageSrc)} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
              <div>
                <a href={project.demo}>Demo</a>
                <a href={project.source}>Source</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
