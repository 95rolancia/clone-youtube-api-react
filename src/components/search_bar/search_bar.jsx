import React from "react";
import styles from "./search_bar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();
  const formRef = useRef();
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = inputRef.current.value;
    formRef.current.reset();
    onSearch(keyword);
  };

  return (
    <form ref={formRef} className={styles.search} onSubmit={handleSearch}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="검색"
      />
      <button className={styles.button}>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
