import React from "react";
import { mount } from "enzyme";
import Input from "./Input";
import { findByAttr, checkProps, storeFactory } from "../test/testUtils";
import { Provider } from "react-redux";

const setup = (initialState = {}, secret = "party") => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Input secretWord={secret} />
    </Provider>
  );
};

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("if no secret words", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ success: false });
  });
  test("render without error", () => {
    const component = findByAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
  });
});

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test("input renders without error", () => {
      const inputComponent = findByAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box does not show", () => {
      const inputBox = findByAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("submit button does not show", () => {
      const submitBtn = findByAttr(wrapper, "submit-button");
      expect(submitBtn.exists()).toBe(false);
    });
  });
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test("input renders without error", () => {
      const inputComponent = findByAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box does not show", () => {
      const inputBox = findByAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("submit button does not show", () => {
      const submitBtn = findByAttr(wrapper, "submit-button");
      expect(submitBtn.exists()).toBe(true);
    });
  });
});

describe("state controlled input field", () => {
  let wrapper;
  let mockCurrentGuess = jest.fn();
  let originalUseState;

  beforeEach(() => {
    mockCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockCurrentGuess]);
    wrapper = setup({ success: false });
  });

  afterEach(() => {
    React.useState = originalUseState;
  });
  test("state updates with value of input box upon change", () => {
    const inputBox = findByAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
    expect(mockCurrentGuess).toHaveBeenCalledWith("");
  });
});
