<script setup lang="ts">
import HighlightInputContainer from "./components/HighlightInputContainer.vue";
import TextBox from "./components/TextBox.vue";
</script>

<template>
  <div class="basic">
    <div class="text-box">
      <TextBox text="hello" />
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
