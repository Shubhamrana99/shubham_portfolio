import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/project.json";
import { getImageurl } from "../../utils";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, i) => {
          return (
            <div key={i} className={styles.projectContainer}>
              <img
                src={getImageurl(project.imageSrc)}
                alt={project.title}
                className={styles.image}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, i) => (
                  <li key={i} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
              <div className={styles.links}>
                <a href={project.demo} className={styles.link}>
                  Demo
                </a>
                <a href={project.source} className={styles.link}>
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
