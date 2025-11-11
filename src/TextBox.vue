<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <div data-test="text-box">{{ text }}</div>
</template>
