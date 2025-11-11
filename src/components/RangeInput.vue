<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  highlight: [payload: { start: number; end: number }];
}>();

const start = ref<number>(0);
const end = ref<number>(0);

function handleSubmit(e: Event) {
  e.preventDefault();
  emit("highlight", { start: start.value, end: end.value });
}
</script>

<template>
  <form data-test="range-form" @submit="handleSubmit">
    <input data-test="start-range" type="number" v-model.number="start" />
    <input data-test="end-range" type="number" v-model.number="end" />
  </form>
</template>
