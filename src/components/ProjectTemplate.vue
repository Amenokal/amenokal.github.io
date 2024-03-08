<template>
  <div class="project">
    <h2><slot name="title"/></h2>
    <h3><slot name="subtitle"/></h3>

    <slot name="content" />

    <h4>Galerie</h4>

    <div class="pic-grid">
      <div class="mockup"/>
      <div class="mockup"/>
      <div class="mockup"/>
      <div class="mockup"/>
      <div class="mockup"/>
      <div class="mockup"/>
    </div>
    
    <h4>Features</h4>
    <h4>Technos</h4>
  </div>
</template>

<script setup>
</script>