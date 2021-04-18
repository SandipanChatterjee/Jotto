import checkPropTypes from "check-prop-types";

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
