import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps } from "../test/testUtils";
import GussedWords from "./GussedWords";

const defaultProps = () => {
  gussedWords: [{ gussedWord: "train", letterMatchCount: 3 }];
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  console.error("error#", setupProps);
  return shallow(<GussedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GussedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ gussedWords: [] });
  });
  test("renders without error", () => {
    const component = findByAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("render instructions to guess a word", () => {
    const component = findByAttr(wrapper, "guess-instruction").text();
    expect(component.length).not.toBe(0);
  });
});

describe("if there are words gussed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup(guessedWords);
  });
  test("renders without error", () => {
    const component = findByAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test('renders "guessed words" section', () => {
    const guessedWordNode = findByAttr(wrapper, "gussed-word");
    expect(guessedWordNode.length).toBe("1");
  });
  test("correct number of guessed words", () => {
    const guessedWordNode = findByAttr(wrapper, "gussed-word");
    expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});
