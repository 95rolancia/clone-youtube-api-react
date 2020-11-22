import React from "react";
import styles from "./searchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  return (
    <form className={styles.search} action="submit">
      <input className={styles.search__input} type="text" placeholder="검색" />
      <button className={styles.search__button} type="submit">
        <FontAwesomeIcon className={styles.search__icon} icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
