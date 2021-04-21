import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESSS",
};

export function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS,
  };
}

export const getSecretWord = () => {
  // TODO : write actual action in redux and context section
  return axios.get("http://localhost:3030").then((res) => res.data);
};
