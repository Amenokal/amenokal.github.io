<template>
  <PageTemplate>
    <template #title>Xavier Cauchy Photographie</template>
    <template #subtitle>Portfolio pour photographe professionel</template>
    <template #technos>
      <NuxtIcon/>
      <SassIcon/>
      <NodeIcon/>
    </template>
  </PageTemplate>
</template>

<script setup>
import PageTemplate from '@/components/elements/PageTemplate.vue'
import NuxtIcon from '@/components/icons/NuxtIcon.vue'
import SassIcon from '@/components/icons/SassIcon.vue'
import NodeIcon from '@/components/icons/NodeIcon.vue'
</script>