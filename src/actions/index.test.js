import moxios from "moxios";
import { getSecretWord, correctGuess, actionTypes } from "./index";

describe("correct guess", () => {
  test('returns an action with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("secret word is returned", () => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });
    return getSecretWord().then((res) => expect(res).toBe("party"));
  });
});
