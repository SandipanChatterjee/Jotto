import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "../src/reducer/index";

export const storeFactory = (initialState) =>
  createStore(rootReducer, initialState);

export const findByAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, confirmProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmProps,
    "prop",
    component.name
  );
  return expect(propError).toBeUndefined();
};
