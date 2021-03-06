import successReducer from "./successReducer";
import { actionTypes } from "../actions/index";

test("when previous state is undefined return false", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test("return previous state when unknown action type", () => {
  const newState = successReducer(false, { type: "UNKNOWN" });
  expect(newState).toBe(false);
});
test('return "true" for action type "CORRECT_GUESS"', () => {
  const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
