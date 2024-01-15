import React from "react";
import styles from "./About.module.css";
import myImg from "../../assets/hero/myImg.jpg";
import cursorImg from "../../assets/about/cursorIcon.png";
import frameworkImg from "../../assets/about/serverIcon.png";
import uiImg from "../../assets/about/uiIcon.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={myImg}
          alt="my-image"
          width="562px"
          className={styles.aboutImg}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorImg} alt="frontend-engg" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I’m a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={frameworkImg} alt="framework" />
            <div className={styles.aboutItemText}>
              <h3>Frameworks and Libraries</h3>
              <p>
                I have good knowledge in various front-end frameworks and
                libraries like react and material-UI
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={uiImg} alt="UI-Designer" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
