<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Présentation du projet -->
    <section id="intro" class="py-16 px-6 bg-white text-center flex flex-col items-center">
      <h2 class="text-3xl font-semibold text-blue-800 mb-4">HerbPods</h2>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
        Ce projet a été conçu pour automatiser la culture de fines herbes, à l'aide d’un Raspberry Pi
        et d’un réseau de capteurs permettant de surveiller et contrôler l'environnement.
        L’objectif : créer un environnement de culture optimal avec un minimum d’intervention humaine.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-6">
        <img src="/src/assets/SetupPlante_1.jpg" class="w-full sm:w-5/12 rounded-md" alt="Setup Plante">
        <img src="/src/assets/cameraSetup.jpg" class="w-full sm:w-5/12 rounded-md" alt="Setup Caméra">
      </div>
    </section>

    <!-- Détails du projet -->
    <section id="details" class="py-16 px-6 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 class="text-2xl font-bold text-blue-800">Détails du projet</h3>
          <a href="#gallery"
            class="btn btn-secondary text-white hover:bg-blue-600 transition duration-300">Voir les photos</a>
        </div>

        <h3 class="text-2xl text-blue-800 mb-3">Résumé</h3>
        <p class="text-lg text-gray-700 mb-4">
          Le projet utilise un Raspberry Pi pour interagir avec des capteurs et des actionneurs,
          permettant de surveiller le pH, l’humidité et la lumière dans le système.
          Le tout a été développé en Python sur le Raspberry Pi.
        </p>

        <h3 class="text-2xl text-blue-800 mb-3">Infrastructure</h3>
        <p class="text-lg text-gray-700 mb-4">
          Pour l’infrastructure, le projet repose sur Kubernetes pour gérer les pods hébergeant nos services.
          Ces pods tournent sur des Raspberry Pi, ce qui permet d’avoir une architecture légère et modulable.
          Grâce à Kubernetes, on peut facilement mettre à l’échelle, gérer et surveiller les services de manière automatique.
          On a aussi intégré Flux, un outil GitOps, pour automatiser les déploiements dès qu’on pousse du code sur Git.
          Cela rend la gestion fluide tout en maintenant une haute disponibilité.
        </p>

        <h3 class="text-2xl text-blue-800 mb-3">Raspberry Pi</h3>
        <p class="text-lg text-gray-700 mb-4">
          Le Raspberry Pi est un composant clé du projet : il gère les pompes à eau, les capteurs,
          et l’envoi des données récoltées vers la base de données.
          Dans le cadre du projet, nous devions implémenter une nouvelle technologie.
          J’ai donc ajouté des caméras connectées accessibles à distance grâce à Flask et MJPEG-streamer.
          Voici quelques images de l’interface des caméras :
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <img src="/src/assets/Intefrace cam.png" class="w-full rounded-md" alt="Interface caméra">
          <img src="/src/assets/Cam Code.png" class="w-full rounded-md" alt="Code caméra">
        </div>
      </div>
    </section>

    <!-- Galerie de photos -->
    <section id="gallery" class="py-16 px-6 bg-white">
      <h3 class="text-2xl font-bold text-blue-800 text-center mb-6">Galerie du projet</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card shadow-xl bg-base-100">
          <figure><img src="/src/assets/SetupPlante_2.jpg" alt="Pompe" class="w-full h-64 object-cover" /></figure>
          <div class="card-body">
            <h2 class="card-title">Pompe</h2>
            <p>Capteurs utilisés pour surveiller l'environnement de culture.</p>
          </div>
        </div>
        <div class="card shadow-xl bg-base-100">
          <figure><img src="/src/assets/Intefrace cam.png" alt="Interface caméras" class="w-full h-64 object-cover" /></figure>
          <div class="card-body">
            <h2 class="card-title">Interface des caméras</h2>
            <p>Interface en temps réel pour la visualisation des caméras.</p>
          </div>
        </div>
        <div class="card shadow-xl bg-base-100">
          <figure><img src="/src/assets/SetupPlante_3.jpg" alt="Raspberry Pi" class="w-full h-64 object-cover" /></figure>
          <div class="card-body">
            <h2 class="card-title">Raspberry Pi</h2>
            <p>Le cœur du système de culture automatisée.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 bg-blue-800 text-white text-center">
      <p>&copy; {{ thisYear }} Charles Perreault-Gagné. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script setup>
import moment from 'moment'
import { ref, onMounted } from 'vue'

const thisYear = ref('')

onMounted(() => {
  thisYear.value = moment().year()
})
</script>

<style scoped>
.bg-blue-800 {
  background-color: #003366;
}
.bg-gray-50 {
  background-color: #f9f9f9;
}
.bg-gray-100 {
  background-color: #f3f4f6;
}
</style>
