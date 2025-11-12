import { type Highlight } from "../store/highlights.ts";
import {
  slice,
  mergeHighlights,
  sortHighlights,
  isOverlap,
} from "./highlight.ts";

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

test("when there is a number match, it is an overlap", () => {
  const highlight1 = {
    start: 1,
    end: 3,
  };
  const highlight2 = {
    start: 3,
    end: 6,
  };

  expect(isOverlap(highlight1, highlight2)).toBe(true);
});

test("when the h1 end is bigger than h2 start, it is an overlap", () => {
  const highlight1 = {
    start: 1,
    end: 5,
  };
  const highlight2 = {
    start: 4,
    end: 6,
  };

  expect(isOverlap(highlight1, highlight2)).toBe(true);
});

test("merges two highlights", () => {
  const highlight1 = {
    start: 1,
    end: 5,
  };
  const highlight2 = {
    start: 4,
    end: 6,
  };

  const expected = {
    start: 1,
    end: 6,
  };

  expect(mergeHighlights(highlight1, highlight2)).toStrictEqual(expected);
});

test("sort highlights", () => {
  const highlights: Highlight[] = [
    {
      start: 6,
      end: 9,
    },
    {
      start: 3,
      end: 6,
    },
    {
      start: 1,
      end: 3,
    },
  ];

  const expected = [
    {
      start: 1,
      end: 3,
    },

    {
      start: 3,
      end: 6,
    },
    {
      start: 6,
      end: 9,
    },
  ];

  expect(sortHighlights(highlights)).toStrictEqual(expected);
});

/*
test("given a list of highlights, a new highlight should be added", () => {
  let highlights = [
    { start: 1, end: 3 },
    {
      start: 3,
      end: 6,
    },
  ];
  let newHighlight = { start: 6, end: 9 };

  const expected = [
    { start: 1, end: 3 },
    { start: 3, end: 6 },
    { start: 6, end: 9 },
  ];
  let newHighlights = addHighlight(highlights, newHighlight);
  expect(newHighlights).toStrictEqual(expected);
});

test("given a list of highlights, when a new highlight is given, there should be no duplicates", () => {
  let highlights = [
    { start: 1, end: 3 },
    { start: 3, end: 6 },
    { start: 6, end: 9 },
  ];
  let newHighlight = {
    start: 6,
    end: 9,
  };

  let newHighlights = addHighlight(highlights, newHighlight);
  expect(newHighlights).toStrictEqual(highlights);
});

test("given two highlights, it should recognize overlaps", () => {
  const highlight1 = {
    start: 1,
    end: 3,
  };
  const highlight2 = {
    start: 2,
    end: 6,
  };

  expect(isOverlap(highlight1, highlight2)).toBe(true);
});

/*test("given a list of highlights, an overlapping highlight should be combined", () => {
  let highlights = [
    { start: 1, end: 3 },
    { start: 3, end: 6 },
    { start: 9, end: 12 },
  ];
  let newHighlight = {
    start: 4,
    end: 9,
  };

  const expected = [
    { start: 1, end: 3 },
    { start: 3, end: 9 },
    { start: 9, end: 12 },
  ];

  let newHighlights = addHighlight(highlights, newHighlight);
  expect(newHighlights).toStrictEqual(expected);
});
*/
