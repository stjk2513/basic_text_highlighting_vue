<script setup lang="ts">
import { ref } from "vue";
import { useTextStore, type Text } from "../store/text";
import TextBox from "./TextBox.vue";

const textStore = useTextStore();

const content = ref(textStore.texts[0]!.content);
</script>

<template>
  <TextBox :text="content"></TextBox>
</template>
