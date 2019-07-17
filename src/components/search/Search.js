import React, { useState, useContext } from "react";
import ImageContext from "../../context/image/imageContext";
// import words from "../../assets/words_dictionary";
import styles from "./Search.module.css";

const Search = props => {
  const imageContext = useContext(ImageContext);
  const { getImagesData } = imageContext;

  const [searchText, setSearchText] = useState("");

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

  const addOneCharacterToWord = word => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    word = word
      .toLowerCase()
      .replace(/[^a-z]/gi, "")
      .split("");
    let results = [];

    for (let i = 0; i <= word.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        let newWord = word.slice();
        newWord.splice(i, 0, alphabet[j]);
        results.push(newWord.join(""));
      }
    }

    return results;
  };

  // console.log(addOneCharacterToWord("Ceku"));

  const removeOneCharacterFromWord = word => {
    word = word
      .toLowerCase()
      .replace(/[^a-z]/gi, "")
      .split("");
    let results = [];

    if (word.length > 1) {
      for (let i = 0; i < word.length; i++) {
        let newWord = word.slice();
        newWord.splice(i, 1);
        results.push(newWord.join(""));
      }
    }

    return results;
  };

  // console.log(removeOneCharacterFromWord("Ceku"));

  const swapLettersInWord = word => {
    word = word
      .toLowerCase()
      .replace(/[^a-z]/gi, "")
      .split("");
    let results = [];

    if (word.length > 1) {
      for (let i = 0; i < word.length; i++) {
        let newWord = word.slice();
        let letterToBeSwapped = newWord.splice(i, 1);
        newWord.splice(i + 1, 0, letterToBeSwapped[0]);
        results.push(newWord.join(""));
      }
    }

    return results;
  };

  // console.log(swapLettersInWord("Ceku"));

  const replaceLetterInWord = word => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    word = word
      .toLowerCase()
      .replace(/[^a-z]/gi, "")
      .split("");
    let results = [];

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        let newWord = word.slice();
        newWord[i] = alphabet[j];
        results.push(newWord.join(""));
      }
    }

    return results;
  };

  // console.log(replaceLetterInWord("Ceku"));

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
