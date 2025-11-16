import { setActivePinia, createPinia } from "pinia";
import { useTextStore } from "./text.ts";

describe("text store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("starts with a single text", () => {
    const texts = useTextStore();
    expect(texts.texts.length).toBe(1);
  });
});
