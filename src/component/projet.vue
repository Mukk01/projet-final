<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Présentation du projet -->
    <section id="intro" class="py-16 px-6 bg-white text-center flex flex-col items-center">
      <h2 class="text-3xl font-semibold text-blue-800 mb-4">HerbPods</h2>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
        Ce projet a été conçu pour automatiser la culture de fines herbes, utilisant un système de Raspberry Pi
        et un réseau de capteurs pour surveiller et contrôler l'environnement. L'objectif est de créer un
        environnement de culture optimal avec un minimum d'intervention humaine.
      </p>
      <div class="flex justify-center gap-10">
        <img src="/src/assets/SetupPlante_1.jpg" class="size-4/12 rounded-md" alt="">
        <img src="/src/assets/cameraSetup.jpg" class="size-4/12 rounded-md" alt="">

      </div>
    </section>

    <!-- Détails du projet -->
    <section id="details" class="py-16 px-6 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-start gap-5">
          <h3 class="text-2xl font-bold text-blue-800 mb-6">Détails du Projet</h3>
          <a href="#gallery"
            class="btn btn-secondary text-white hover:bg-blue-600 transition duration-300 relative bottom-1">Voir les
            photos</a>
        </div>
        <h3 class="text-2xl text-blue-800 mb-3">Résumé</h3>
        <p class="text-lg text-gray-700 mb-4">
          Le projet utilise un Raspberry Pi pour interagir avec des capteurs et des actionneurs,
          permettant de surveiller le ph, l'acidité, et la lumière dans le système.
          Le tout à été fait en python sur le raspberry
        </p>
        <h3 class="text-2xl text-blue-800 mb-3">Infrastructure</h3>
        <p class="text-lg text-gray-700 mb-4">
          Pour l'infrastructure du projet utilise Kubernetes pour gérer les pods qui hébergent nos services.
          Ces pods tournent sur des Raspberry Pi,
          ce qui nous permet d'avoir une infrastructure légère et modulable. Grâce à Kubernetes, on peut
          facilement mettre à l'échelle,
          gérer et surveiller nos services de manière automatique. On a aussi intégré Flux, un outil GitOps,
          qui nous permet de déployer
          automatiquement les mises à jour dès qu’on pousse du code sur Git. Cela rend notre gestion de
          l’infrastructure fluide, tout en maintenant une haute
          disponibilité et de bonnes performances !
        </p>
        <h3 class="text-2xl text-blue-800 mb-3">Raspberry PI</h3>
        <p class="text-lg text-gray-700 mb-4">
          Le raspberry PI était un composant cloé du projet, il gérait les pompes d'eau, les sensors, et l'envoie des
          données récolter à la BD.
          Dans le cadre du projet, nous devions implémenter une nouvelle technologie, j'ai donc choisi d'implémenter des
          caméras connecté que l'on pouvait acceder de
          n'importe où. Pour ce faire, j'ai utilisé Flask, et MJPEG-streamer. Voici quelque photo de l'interface des
          caméras.
        </p>
        <div class="flex relative right-80 top-5 gap-8">
          <img src="/src/assets/Intefrace cam.png" class="size-10/12 rounded-md" alt="">
          <img src="/src/assets/Cam Code.png" class="size-10/12 rounded-md" alt="">
        </div>
      </div>
    </section>

    <!-- Galerie de photos -->
    <section id="gallery" class="py-16 px-6 bg-white">
      <h3 class="text-2xl font-bold text-blue-800 text-center mb-6">Galerie du Projet</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card shadow-xl bg-base-100">
          <figure><img src="/src/assets/SetupPlante_2.jpg" alt="Image 1" class="w-full h-64 object-cover" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Pompe</h2>
            <p>Capteurs utilisés pour surveiller l'environnement de culture.</p>
          </div>
        </div>
        <div class="card shadow-xl bg-base-100">
          <figure><img src="/src/assets/Intefrace cam.png" alt="Image 2" class="w-full h-64 object-cover" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Interface Utilisateur des caméras</h2>
            <p>Interface en temps réel pour le visionement des caméras.</p>
          </div>
        </div>
        <div class="card shadow-xl bg-base-100">
          <figure><img src="/src/assets/SetupPlante_3.jpg" alt="Image 3" class="w-full h-64 object-cover" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Raspberry Pi</h2>
            <p>Le Raspberry Pi sert de coeur du système de culture automatisée.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 bg-blue-800 text-white text-center">
      <p>&copy; {{thisYear}} Charles Perreault-Gagné. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script setup>
import moment from 'moment';
import { onMounted, ref } from 'vue';

const thisYear = ref('');

onMounted(()=>{
  thisYear.value = moment().year();
})
</script>

<style scoped>
/* Personnalisation des couleurs */
.bg-blue-800 {
  background-color: #003366;
  /* Bleu marin sombre */
}

.bg-gray-50 {
  background-color: #f9f9f9;
  /* Gris clair */
}

.bg-gray-100 {
  background-color: #f3f4f6;
  /* Gris très clair */
}
</style>