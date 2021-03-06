import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByAttr, storeFactory } from "../test/testUtils";
import { Provider } from "react-redux";

// activate global mock to make sure getSecretWord doesn't make network calls
jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test("render without error", () => {
  const wrapper = setup();
  const app = findByAttr(wrapper, "component-app");
  expect(app.length).toBe(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    setup();
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord on app mount", () => {
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord does not run on app update", () => {
    setup().setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
