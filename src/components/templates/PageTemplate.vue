<template>
  <div class="project">

    <h2><slot name="title"/></h2>

    <div class="project-header">
      <h3><slot name="subtitle"/></h3>

      <div>
        <slot name="links"/>
      </div>
    </div>
    
    <div v-if="!hideGalery">
      <div class="galery">
        <div class="mockup"/>
        <div class="mockup"/>
        <div class="mockup"/>
      </div>
    </div>
    <slot class="content" v-else name="content"/>

    <h4>Projet</h4>
    <div class="flan"><slot name="project"/></div>

    <h4>Technos</h4>
    <p class="technos"><slot name="technos"/></p>
  </div>
</template>

<script setup>
const { hideGalery = false } = defineProps(['hideGalery'])
</script>