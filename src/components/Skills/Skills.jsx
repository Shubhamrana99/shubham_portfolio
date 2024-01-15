import styles from "./Skills.module.css";
import React from "react";
import skills from "../../data/skills.json";
import { getImageurl } from "../../utils";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, i) => {
            return (
              <div key={i} className={styles.skill}>
                <div className={styles.skillImgContainer}>
                  <img src={getImageurl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p className={skill.skillTitle}>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/**<div>skillBar</div> */}
    </section>
  );
};

export default Skills;
