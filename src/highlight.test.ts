import { slice } from "./highlight.ts";

test("when given a string and a range, it should return three slices of text", () => {
  const text = "onetwothreefour";
  const range = { start: 3, end: 6 };

  const expected = ["one", "two", "threefour"];
  const actual = slice(text, range);

  expect(actual).toEqual(expected);
});

test("when the range starts with a zero, it should return two slices", () => {
  const text = "onetwothreefour";
  const range = { start: 0, end: 3 };

  const expected = ["one", "twothreefour"];
  const actual = slice(text, range);

  expect(actual).toEqual(expected);
});
