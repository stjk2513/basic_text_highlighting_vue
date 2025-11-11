import { slice } from "./highlight.ts";

test("when given string and a list of ranges with a single range, it should return three slices of text", () => {
  const text = "onetwothreefour";
  const ranges = [{ start: 3, end: 6 }];

  const expected = ["one", "two", "threefour"];
  const actual = slice(text, ranges);

  expect(actual).toEqual(expected);
});

test("when the range starts with a zero, it should return two slices", () => {
  const text = "onetwothreefour";
  const ranges = [{ start: 0, end: 3 }];

  const expected = ["one", "twothreefour"];
  const actual = slice(text, ranges);

  expect(actual).toEqual(expected);
});

test("when given multiple ranges, it should slice appropriately", () => {
  const text = "onetwothreefour";
  const ranges = [
    { start: 3, end: 6 },
    { start: 6, end: 11 },
  ];

  const expected = ["one", "two", "three", "four"];
  const actual = slice(text, ranges);

  expect(actual).toEqual(expected);
});
