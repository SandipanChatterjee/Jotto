import React from "react";
import propTypes from "prop-types";

const GuessedWords = (props) => {
  let content;

  if (props?.guessedWords?.length == 0) {
    content = (
      <span data-test="guess-instruction">Try to guess the secret word</span>
    );
  } else {
    const { guessedWords } = props;
    content = (
      <div data-test="guessed-words">
        <table>
          <thead>
            <tr>
              <th>GuessedWord</th>
              <th>Letter Match Count</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((el, index) => {
              return (
                <tr data-test="guessed-word" key={index}>
                  <td>{el.guessedWord}</td>
                  <td>{el.letterMatchCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWord: propTypes.string.isRequired,
      letterMatchCount: propTypes.number,
    })
  ).isRequired,
};

export default GuessedWords;
