export const getLetterMatchCount = (guessedWord, secret) => {
  const secretLetters = secret.split("");
  //   const guess = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedWord.includes(letter)).length;
};
