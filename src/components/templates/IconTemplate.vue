<template>
  <div class="icon" :class="{'horizontal': large}">
    <slot/>
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
const { title, large = false } = defineProps(['title', 'large']) 
</script>