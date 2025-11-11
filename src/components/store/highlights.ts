import { defineStore } from "pinia";

interface Highlight {
  start: number;
  end: number;
}

export const useHighlightStore = defineStore("highlights", {
  state: () => ({
    highlights: [] as Highlight[],
  }),
  actions: {
    addHighlight(highlight: Highlight) {
      this.highlights.push(highlight);
    },
  },
});
