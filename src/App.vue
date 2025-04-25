<script setup>
import headerApp from './component/header.vue';
import projet from './component/projet.vue';
</script>

<template>
  <headerApp></headerApp>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <projet></projet>
  </div>
</template>

<style scoped>
/* Vous pouvez également définir un fond personnalisé pour le mode sombre ici */
body {
  background-color: #ffffff; /* Fond clair */
}
</style>
