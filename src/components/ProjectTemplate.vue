<template>
  <div class="project">
    <h2><slot name="title"/></h2>
    <h3><slot name="subtitle"/></h3>

    <h4>Projet</h4>
    <p><slot name="project"></slot></p>

    <h4>Features</h4>
    <p><slot name="features"></slot></p>

    <h4>Technos</h4>
    <p><slot name="technos"></slot></p>

    <div v-if="!hideGalery">
      <h4>Galerie</h4>
      <div class="pic-grid">
        <div class="mockup"/>
        <div class="mockup"/>
        <div class="mockup"/>
      </div>
    </div>
    <slot v-else name="content"/>
  </div>
</template>

<script setup>
const { hideGalery = false } = defineProps(['hideGalery'])
</script>