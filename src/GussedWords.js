import React from "react";
import propTypes from "prop-types";
const GussedWords = (props) => {
  let content;
  if (props.gussedWords.length == 0) {
    content = (
      <span data-test="guess-instruction">Try to guess the secret word</span>
    );
  }
  return <div data-test="component-guessed-words">{content}</div>;
};

GussedWords.propTypes = {
  gussedWords: propTypes.arrayOf(
    propTypes.shape({
      gussedWord: propTypes.string.isRequired,
      letterMatchCount: propTypes.number,
    })
  ).isRequired,
};

export default GussedWords;
