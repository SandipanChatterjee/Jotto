import { shallow } from "enzyme";
import Input from "./Input";
import { findByAttr, checkProps } from "../test/testUtils";

const defaultProps = {
  secret: "party",
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
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
