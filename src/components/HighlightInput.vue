<script setup lang="ts">
import { computed, ref } from "vue";
import { type Highlight } from "../store/highlights.ts";

const emit = defineEmits<{
  highlight: [payload: Highlight];
}>();

const start = ref<number>(0);
const end = ref<number>(0);
const invalid = ref(false);

function isFormInvalid() {
  return start.value >= end.value;
}

function handleSubmit(e: Event) {
  e.preventDefault();
  invalid.value = isFormInvalid();
  !invalid.value && emit("highlight", { start: start.value, end: end.value });
}
</script>

<template>
  <form data-test="range-form" @submit="handleSubmit">
    <span v-if="invalid"
      >Start range cannot be equal or greater than end range</span
    >
    <br />
    <input data-test="start-range" type="number" v-model.number="start" />
    <input data-test="end-range" type="number" v-model.number="end" />
    <input type="submit" />
  </form>
</template>
