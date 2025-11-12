import { type Highlight } from "../store/highlights";

export function slice(text: string, ranges: Highlight[]) {
  let indents = Array.from(
    new Set([
      0,
      ...ranges.flatMap((range) => [range.start, range.end]),
      text.length,
    ])
  );

  let words = [];

  let previous: number = indents[0]!;
  for (let i = 1; i < indents.length; i++) {
    words.push(text.slice(previous, indents[i]));
    previous = indents[i]!;
  }

  return words;
}

export function addHighlight(
  highlights: Highlight[],
  highlight: Highlight
): Highlight[] {
  const isDuplicate = highlights.some((current) => {
    return current.start === highlight.start && current.end === highlight.end;
  });

  return isDuplicate ? highlights : [...highlights, highlight];
}

export function isOverlap(
  highlight1: Highlight,
  highlight2: Highlight
): boolean {
  let common = new Set([
    highlight1.start,
    highlight1.end,
    highlight2.start,
    highlight2.end,
  ]);

  if (common.size < 4) return true;

  let first;
  let second;
  if (highlight1.start < highlight2.start) {
    first = highlight1;
    second = highlight2;
  } else {
    first = highlight2;
    second = highlight1;
  }

  return first.end > second.start;
}

export function mergeHighlights(
  highlight1: Highlight,
  highlight2: Highlight
): Highlight {
  let first;
  let second;
  if (highlight1.start < highlight2.start) {
    first = highlight1;
    second = highlight2;
  } else {
    first = highlight2;
    second = highlight1;
  }

  return {
    start: first.start,
    end: second.end,
  };
}

export function sortHighlights(highlights: Highlight[]): Highlight[] {
  return highlights.sort((h1, h2) => h1.start - h2.start);
}
