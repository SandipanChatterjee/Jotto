import { shallow } from "enzyme";
import Input from "./Input";
import { findByAttr, checkProps } from "../test/testUtils";
import React from "react";

const defaultProps = {
  secret: "party",
};

const setup = (success, props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input success={success} {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(Input, defaultProps);
});

describe("if no secret words", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
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
      wrapper = setup(true);
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
      wrapper = setup(false);
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
    wrapper = setup();
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
