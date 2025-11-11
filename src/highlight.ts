export type Range = {
  start: number;
  end: number;
};

export function slice(text: string, ranges: Range[]) {
  let indents = new Set<number>();
  indents.add(0);
  for (const range of ranges) {
    indents.add(range.start);
    indents.add(range.end);
  }
  indents.add(text.length);

  let indentsArray: number[] = Array.from(indents);

  let words = [];

  let previous: number = indentsArray[0]!;
  for (let i = 1; i < indentsArray.length; i++) {
    words.push(text.slice(previous, indentsArray[i]));
    previous = indentsArray[i]!;
  }

  return words;
}
