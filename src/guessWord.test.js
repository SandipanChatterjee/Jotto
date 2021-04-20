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
  const submitBtn = findByAttr(wrapper, "submit-btn");
  submitBtn.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("no words guessed", () => {});

describe("some words guessed", () => {});

describe("guess secret word", () => {});
