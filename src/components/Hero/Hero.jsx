import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/about/heromain.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Shubham Rana</h1>
        <p className={styles.description}>
          Aspiring Frontend Developer skilled in HTML, CSS, Vanilla-JS, and
          React. Let's connect for a glimpse into my coding journey!
        </p>
        {/*<p className={styles.description}>
          A dynamic and creative Frontend Developer with a passion for crafting
          seamless user experiences. Proficient in HTML, CSS, VanillaJS, Node,
          and React. Eager to bring innovative ideas to life. Reach out for a
          closer look at my skills and projects!"
        </p>*/}
        <a
          href="mailto:shubhamrana19599@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={heroImg}
        alt="hero-img"
        // width="546px"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
