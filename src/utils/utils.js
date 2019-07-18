import words from "../assets/words_dictionary";

export const addOneLetterToWord = word => {
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

export const removeOneLetterFromWord = word => {
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

export const swapLettersInWord = word => {
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

export const replaceLetterInWord = word => {
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

export const oneDistanceFromWord = word => {
  let results = [];

  word = word
    .toLowerCase()
    .replace(/[^a-z]/gi, "")
    .split("");

  results = results.concat(swapLettersInWord(word));
  results = results.concat(replaceLetterInWord(word));
  results = results.concat(addOneLetterToWord(word));
  results = results.concat(removeOneLetterFromWord(word));

  return results;
};

export const correctWord = word => {
  word = word.toLowerCase().replace(/[^a-z]/gi, "");
  if (words[word]) {
    return word;
  }

  word = word.split("");

  let wordsOneDistanceAway = [];

  let swappedLetterWords = swapLettersInWord(word);
  for (let swappedLetterWord of swappedLetterWords) {
    if (words[swappedLetterWord]) {
      return swappedLetterWord;
    }
  }
  wordsOneDistanceAway = wordsOneDistanceAway.concat(swappedLetterWords);

  let replaceLetterWords = replaceLetterInWord(word);
  for (let replaceLetterWord of replaceLetterWords) {
    if (words[replaceLetterWord]) {
      return replaceLetterWord;
    }
  }
  wordsOneDistanceAway = wordsOneDistanceAway.concat(replaceLetterWords);

  let addOneLetterWords = addOneLetterToWord(word);
  for (let addOneLetterWord of addOneLetterWords) {
    if (words[addOneLetterWord]) {
      return addOneLetterWord;
    }
  }
  wordsOneDistanceAway = wordsOneDistanceAway.concat(addOneLetterWords);

  let removeOneLetterWords = removeOneLetterFromWord(word);
  for (let removeOneLetterWord of removeOneLetterWords) {
    if (words[removeOneLetterWord]) {
      return removeOneLetterWord;
    }
  }
  wordsOneDistanceAway = wordsOneDistanceAway.concat(removeOneLetterWords);

  let wordsTwoDistanceAway = [];

  wordsTwoDistanceAway = wordsTwoDistanceAway.concat(
    oneDistanceFromWord(wordsOneDistanceAway[0])
  );

  for (let i = 0; i < wordsOneDistanceAway.length; i++) {
    wordsTwoDistanceAway = wordsTwoDistanceAway.concat(
      oneDistanceFromWord(wordsOneDistanceAway[i])
    );
  }

  for (let wordTwoDistanceAway of wordsTwoDistanceAway) {
    if (words[wordTwoDistanceAway]) {
      return wordTwoDistanceAway;
    }
  }

  return word.join("");
};
