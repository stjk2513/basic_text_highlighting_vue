<script setup lang="ts">
import HighlightInputContainer from "./components/HighlightInputContainer.vue";
import TextBoxContainer from "./components/TextBoxContainer.vue";
</script>

<template>
  <div class="basic">
    <div class="text-box">
      <TextBoxContainer />
    </div>
    <div class="highlight-input"><HighlightInputContainer /></div>
  </div>
</template>

<style scoped>
.basic {
  display: flex;
}

.text-box {
  flex: 1;
}
</style>
