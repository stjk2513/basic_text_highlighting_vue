<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <div class="text-box" data-test="text-box">{{ text }}</div>
</template>

<style scoped>
.text-box {
  white-space: pre-wrap;
}
</style>
