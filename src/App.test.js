import { shallow } from "enzyme";
import App from "./App";
import { findByAttr } from "../test/testUtils";

const setup = () => {
  return shallow(<App />);
};

test("render without error", () => {
  const wrapper = setup();
  const app = findByAttr(wrapper, "component-app");
  expect(app.length).toBe(1);
});
