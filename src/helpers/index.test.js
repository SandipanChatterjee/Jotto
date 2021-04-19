import { getLetterMatchCount } from "./index";

describe("getLetterMatchCount", () => {
  const secret = "party";
  test("return correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secret);
    expect(letterMatchCount).toBe(0);
  });
  test("return correct count when there are 3 matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secret);
    expect(letterMatchCount).toBe(3);
  });
  test("return correct count when there are duplicate matching letters", () => {
    const letterMatchCount = getLetterMatchCount("pakra", secret);
    expect(letterMatchCount).toBe(3);
  });
});
