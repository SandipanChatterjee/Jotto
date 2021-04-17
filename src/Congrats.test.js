import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { findByAttr } from "../test/testUtils";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => shallow(<Congrats {...props} />);

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
