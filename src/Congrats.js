import React from "react";
import PropTypes from "prop-types";

const Congrats = ({ success }) => {
  return (
    <div>
      {success ? (
        <div data-test="component-congrats">
          <span data-test="congrats-message">congrats</span>
        </div>
      ) : (
        <div data-test="component-congrats"></div>
      )}
    </div>
  );
};
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
