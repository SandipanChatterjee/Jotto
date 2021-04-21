import moxios from "moxios";
import { getSecretWord } from ".";

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
