import React from "react";
import PropTypes from "prop-types";

const Input = ({ secret }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <div data-test="component-input">
      <form>
        <input
          data-test="input-box"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secret: PropTypes.string.isRequired,
};

export default Input;
