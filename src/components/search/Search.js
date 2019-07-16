import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = props => {
  const [searchText, setSearchText] = useState("");

  const { getImages } = props;

  const onSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const search = event => {
    event.preventDefault();
    if (searchText !== "") {
      getImages(searchText);
    }

    event.stopPropagation();
  };

  return (
    <form onSubmit={search}>
      <input
        type="text"
        name="text"
        placeholder="Search Pictures"
        text={searchText}
        onChange={onSearchTextChange}
        className={styles.searchBar}
      />

      <input type="submit" value="Search" className={styles.searchButton} />
    </form>
  );
};

export default Search;
