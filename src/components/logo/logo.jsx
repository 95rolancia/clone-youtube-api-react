import React from "react";
import styles from "./logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Logo = (props) => {
  return (
    <a href="#" className={styles.logo}>
      <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
      <span className={styles.title}>Youtube</span>
    </a>
  );
};

export default Logo;
