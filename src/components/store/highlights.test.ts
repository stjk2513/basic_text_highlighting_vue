import { setActivePinia, createPinia } from "pinia";
import { useHighlightStore } from "./highlights.ts";

describe("Highlights store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("starts with an empty list of highlights", () => {
    const highlights = useHighlightStore();
    expect(highlights.highlights.length).toBe(0);
  });

  it("adds a highlight", () => {
    const highlights = useHighlightStore();

    const highlight = { start: 1, end: 3 };
    highlights.addHighlight(highlight);

    expect(highlights.highlights.length).toBe(1);
    expect(highlights.highlights[0]).toStrictEqual(highlight);
  });
});
