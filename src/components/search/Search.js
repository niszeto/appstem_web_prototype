import React, { useState, useContext } from "react";
import ImageContext from "../../context/image/imageContext";
import styles from "./Search.module.css";

const Search = props => {
  const imageContext = useContext(ImageContext);
  const [searchText, setSearchText] = useState("");

  const { getImagesData } = imageContext;

  const onSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const search = event => {
    event.preventDefault();
    if (searchText !== "") {
      getImagesData(searchText);
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
