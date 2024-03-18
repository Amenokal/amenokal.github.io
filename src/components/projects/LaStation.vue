<template>
  <PageTemplate>
    <template #title>La Station</template>
    <template #subtitle>Site vitrine pour friperie vintage</template>
    <template #links>
      <a href="" target="_blank">Voir le code <OpenLinkIcon/></a>
    </template>
    <template #project>
      <p>Création d'un site vitrine pour un commerce sur Lille.</p>
      <p>Mise en place du CMS headless Strapi pour alimenter une partie blog et photos d'articles et monter dans le référencement.</p>
    </template>
    <template #technos>
      <SvelteIcon/> <SassIcon/> <StrapiIcon/>
    </template>
  </PageTemplate>
</template>

<script setup>
import PageTemplate from '@/components/templates/PageTemplate.vue'
import OpenLinkIcon from '@/components/icons/OpenLinkIcon.vue'
import SvelteIcon from '@/components/icons/SvelteIcon.vue'
import SassIcon from '@/components/icons/SassIcon.vue'
import StrapiIcon from '@/components/icons/StrapiIcon.vue'
</script>