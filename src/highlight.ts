export type Range = {
  start: number;
  end: number;
};

export function slice(text: string, ranges: Range[]) {
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
