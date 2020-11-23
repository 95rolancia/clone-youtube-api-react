import React from "react";
import styles from "./logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Logo = (props) => {
  return (
    <div className={styles.logo}>
      <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
      <span className={styles.title}>Youtube</span>
    </div>
  );
};

export default Logo;
