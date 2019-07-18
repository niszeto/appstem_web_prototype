import React, { useContext } from "react";
import ImageContext from "../../context/image/imageContext";
import { correctWord } from "../../utils/utils";
import styles from "./Search.module.css";

const Search = props => {
  const imageContext = useContext(ImageContext);
  const {
    getImagesData,
    setLoading,
    isLoading,
    searchText,
    setSearchText,
    setSearched
  } = imageContext;

  const onSearchTextChange = event => {
    setSearched(false);
    setSearchText(event.target.value);
  };

  const search = event => {
    event.preventDefault();
    if (searchText !== "" && !isLoading) {
      setLoading();
      setSearched(true);
      let word = correctWord(searchText);
      setSearchText(word);
      getImagesData(word);
    }
  };

  return (
    <form className={styles.container} onSubmit={search}>
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
