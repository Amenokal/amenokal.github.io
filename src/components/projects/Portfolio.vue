<template>
  <PageTemplate>
    <template #title>Portfolio</template>
    <template #subtitle>En route vers la fame</template>
    <template #technos>
      <VueIcon/>
      <SassIcon/>
    </template>
  </PageTemplate>
</template>

<script setup>
import PageTemplate from '@/components/elements/PageTemplate.vue'
import VueIcon from '@/components/icons/VueIcon.vue'
import SassIcon from '@/components/icons/SassIcon.vue'
</script>