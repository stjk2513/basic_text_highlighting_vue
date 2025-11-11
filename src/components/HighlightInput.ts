import { mount } from "@vue/test-utils";
import HighlightInput from "./HighlightInput.vue";

test("emits a highlight", async () => {
  const wrapper = mount(HighlightInput);

  const startRange = wrapper.find("[data-test='start-range']");
  const endRange = wrapper.find("[data-test='end-range']");
  const rangeForm = wrapper.find("[data-test='range-form']");

  await startRange.setValue(3);
  await endRange.setValue(6);
  await rangeForm.trigger("submit");

  expect(wrapper.emitted()).toHaveProperty("highlight");
  expect(wrapper.emitted("highlight")?.[0]).toEqual([{ start: 3, end: 6 }]);
});
