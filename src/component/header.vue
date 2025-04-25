<template>
    <header class="bg-blue-800 text-white shadow-lg py-4">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <!-- Logo / Titre -->
        <div class="flex items-center space-x-4">
          <h1 class="text-3xl font-bold">Projet Final</h1>
          <p class="text-xl font-light text-gray-200">Culture de fines herbes automatisée</p>
        </div>
  
        <!-- Navigation -->
        <nav class="space-x-4">
          <!-- Liens directs vers les sections -->
          <a href="https://www.charlesperreaultgagne.ca" target="_blank" rel="noopener noreferrer" class="btn btn-primary text-white border border-transparent hover:border-white hover:bg-blue-700 py-2 px-4 rounded-md transition-all">Retour au portfolio</a>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  }
  </script>
  
  <style scoped>
  /* Fond du header bleu marin */
  header {
    background-color: #003366; /* Bleu marin sobre */
  }
  
  /* Style des boutons pour un effet sobre */
  .btn-primary {
    background-color: #1E3A8A; /* Bleu plus doux pour les boutons */
    border: 2px solid transparent; /* Bordure invisible */
    padding: 8px 16px; /* Padding uniforme */
    border-radius: 8px; /* Coins arrondis pour un look plus doux */
    font-weight: 500;
    transition: all 0.3s ease; /* Transition fluide pour le survol */
  }
  
  /* Survol des boutons : changement de fond et ajout de bordure */
  .btn-primary:hover {
    background-color: #1C4977; /* Bleu légèrement plus foncé pour le survol */
    border-color: #ffffff; /* Bordure blanche au survol */
  }
  
  /* Style du texte pour plus de lisibilité */
  .btn-primary:hover text-white {
    color: white;
  }
  </style>
  