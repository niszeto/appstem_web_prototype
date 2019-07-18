import words from "../assets/words_dictionary";

const swapLettersInWord = word => {
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

const replaceLetterInWord = word => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
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

const addOneLetterToWord = word => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
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

const removeOneLetterFromWord = word => {
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

const generateWordsOneDistanceAway = word => {
  let results = [];

  word = word
    .toLowerCase()
    .replace(/[^a-z ]/gi, "")
    .split("");

  results = results.concat(
    swapLettersInWord(word),
    replaceLetterInWord(word),
    addOneLetterToWord(word),
    removeOneLetterFromWord(word)
  );

  return results;
};

const generateWordsTwoDistanceAway = wordsOneDistanceAway => {
  let wordsTwoDistanceAway = [];

  for (let i = 0; i < wordsOneDistanceAway.length; i++) {
    wordsTwoDistanceAway = wordsTwoDistanceAway.concat(
      generateWordsOneDistanceAway(wordsOneDistanceAway[i])
    );
  }

  return wordsTwoDistanceAway;
};

const findWordInList = listOfWords => {
  for (let word of listOfWords) {
    if (words[word]) {
      return word;
    }
  }
};

/*   
  Correcting a Word Steps: 
  Note: if at any point when generating words are found in dictionary it will return the first found word

  1. makes all letters in word lowercase and removes all symbols and numbers
  2. returns word if found in word dictionary after filtering invalid search characters
  3. if word is not in dictionary split the word into an array of characters
  4. generate words with letters swapped
  5. generate words with a letter replaced
  6. generate words that adds a letter to the word
  7. generate words that remove a letter from the word
  8. if word still is not found put all words that are one distance away into one array
  9. generate all words two distance away from all the words one distance away 
  10. if word still not found return the given word that has symbols and numbers removed
*/
export const correctWord = word => {
  word = word.toLowerCase().replace(/[^a-z ]/gi, "");
  if (words[word]) return word;

  word = word.split("");
  let wordsOneDistanceAway = [];
  let foundWord;

  let swappedLetterWords = swapLettersInWord(word);
  foundWord = findWordInList(swappedLetterWords);
  if (foundWord) return foundWord;

  let replaceLetterWords = replaceLetterInWord(word);
  foundWord = findWordInList(replaceLetterWords);
  if (foundWord) return foundWord;

  let addOneLetterWords = addOneLetterToWord(word);
  foundWord = findWordInList(addOneLetterWords);
  if (foundWord) return foundWord;

  let removeOneLetterWords = removeOneLetterFromWord(word);
  foundWord = findWordInList(removeOneLetterWords);
  if (foundWord) return foundWord;

  wordsOneDistanceAway = wordsOneDistanceAway.concat(
    swappedLetterWords,
    replaceLetterWords,
    addOneLetterWords,
    removeOneLetterWords
  );

  let wordsTwoDistanceAway = generateWordsTwoDistanceAway(wordsOneDistanceAway);
  foundWord = findWordInList(wordsTwoDistanceAway);
  if (foundWord) return foundWord;

  return word.join("");
};
