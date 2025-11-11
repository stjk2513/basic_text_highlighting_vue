<script setup lang="ts">
import { useHighlightStore, type Highlight } from "../store/highlights";
import HighlightInput from "./HighlightInput.vue";

const highlightStore = useHighlightStore();

function handleHighlight(highlight: Highlight) {
  highlightStore.addHighlight(highlight);
}
</script>

<template>
  <HighlightInput @highlight="handleHighlight" />
  <div v-if="highlightStore.highlights.length > 0">
    <h3>Highlights:</h3>
    <ul>
      <li v-for="(highlight, index) in highlightStore.highlights" :key="index">
        {{ highlight.start }} - {{ highlight.end }}
      </li>
    </ul>
  </div>
</template>
