import React from "react";
import styles from "./header.module.css";
import Logo from "../logo/logo";
import SearchBar from "../searchBar/searchBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faVideo,
  faTh,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__start}>
          <button className={styles.toggleBtn}>
            <FontAwesomeIcon className={styles.toggle} icon={faBars} />
          </button>
          <Logo />
        </div>
        <div className={styles.header__search}>
          <SearchBar />
        </div>
        <ul className={styles.header__btns}>
          <button className={styles.button1}>
            <FontAwesomeIcon icon={faVideo} />
          </button>
          <button className={styles.button2}>
            <FontAwesomeIcon icon={faTh} />
          </button>
          <button className={styles.button3}>
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className={styles.button4}>
            <FontAwesomeIcon icon={faTh} />
          </button>
        </ul>
      </header>
    </>
  );
};

export default Header;
