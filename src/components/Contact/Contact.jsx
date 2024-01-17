import React from "react";
import styles from "./Contact.module.css";
import mailImg from "../../assets/contact/emailIcon.png";
import githubImg from "../../assets/contact/githubIcon.png";
import twitterImg from "../../assets/contact/X.png";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={mailImg} alt="mail" />
          <a href="mailto:shubhamrana19599@gmail.com">
            shubhamrana19599@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubImg} alt="github" />
          <a href="https://github.com/Shubhamrana99/">
            github.com/Shubhamrana99
          </a>
        </li>
        <li className={styles.link}>
          <img src={twitterImg} alt="twitter" />
          <a href="https://twitter.com/shubham19rana">
            twitter.com/shubham19rana
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
