import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByAttr, checkProps } from "../test/testUtils";

const defaultProps = {
  success: true,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test(`render no text when 'success' prop is false`, () => {
  const wrapper = setup({ success: false });
  const component = findByAttr(wrapper, "component-congrats").text();
  expect(component).toBe("");
});

test(`render congrats message when 'success' prop is true`, () => {
  const wrapper = setup({ success: true });
  const component = findByAttr(wrapper, "congrats-message").text();
  expect(component).not.toBe("0");
});

test("does not throw expected warning", () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});
