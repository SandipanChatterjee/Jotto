import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByAttr } from "../test/testUtils";

const setup = (state = {}) => {
  // TODO apply state

  const wrapper = mount(<App />);

  //add val to input box
  const inputBox = findByAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  //simulate click on submit btn
  const submitBtn = findByAttr(wrapper, "submit-button");
  submitBtn.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe.only("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test("creates GuessedWords table with one row", () => {
    const guessedWordRow = findByAttr(wrapper, "guessed-word");
    expect(guessedWordRow.length).toBe(1);
  });
});

describe("some words guessed", () => {
  let wrapper;
  let guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords,
    });
  });
  test("creates GuessedWords table", () => {
    const guessedWordRow = findByAttr(wrapper, "guessed-word");
    expect(guessedWordRow.length).toBe(2);
  });
});

describe("guess secret word", () => {
  let wrapper;
  let guessedWords = [{ guessedWord: "party", letterMatchCount: 5 }];

  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: true,
      guessedWords,
    });
    // add value to input box
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    // simulate click on submit button
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("add row to guessWords table", () => {
    const guessWordNodes = findByAttr(wrapper, "guessed-word");
    expect(guessWordNodes).toHaveLength(3);
  });

  test("show congrats component", () => {
    const congratsComponent = findByAttr(wrapper, "component-congrats");
    expect(congratsComponent.length).toBeGreaterThan(0);
  });

  test("does not display input component contents", () => {
    const inputBox = findByAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);

    const submitBtn = findByAttr(wrapper, "submit-button");
    expect(submitBtn.exists()).toBe(false);
  });
});
