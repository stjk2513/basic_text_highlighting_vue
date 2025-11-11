import { mount } from "@vue/test-utils";
import TextBox from "./TextBox.vue";

function setup(text: string) {
  const wrapper = mount(TextBox, {
    props: {
      text,
    },
  });
  const textBox = wrapper.find('[data-test="text-box"]');

  return { wrapper, textBox };
}

test("should render the given text", () => {
  const text = "hello world!";
  const { textBox } = setup(text);

  expect(textBox.text()).toBe(text);
});
