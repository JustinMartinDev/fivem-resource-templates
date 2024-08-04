<script setup lang="ts">
import VisibilityContext from './contexts/VisibilityContext.vue';
import App from './App.vue';
</script>

<template>
  <VisibilityContext>
    <App />
  </VisibilityContext>
</template>
