<template>
  <PageTemplate>
    <template #title>La Station</template>
    <template #subtitle>Site vitrine pour friperie vintage</template>
    <template #technos>
      <SvelteIcon/>
      <SassIcon/>
      <StrapiIcon/>
    </template>
  </PageTemplate>
</template>

<script setup>
import PageTemplate from '@/components/elements/PageTemplate.vue'
import SvelteIcon from '@/components/icons/SvelteIcon.vue'
import SassIcon from '@/components/icons/SassIcon.vue'
import StrapiIcon from '@/components/icons/StrapiIcon.vue'
</script>