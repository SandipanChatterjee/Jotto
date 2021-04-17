import React from "react";

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

export default Congrats;
