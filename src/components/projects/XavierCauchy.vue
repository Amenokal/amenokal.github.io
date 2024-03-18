<template>
  <PageTemplate>
    <template #title>Xavier Cauchy Photographie</template>
    <template #subtitle>Portfolio pour photographe professionel</template>
    <template #links>
      <a href="https://xavier-cauchy.com" target="_blank">Voir le site <OpenLinkIcon/></a>
    </template>
    <template #project>
      <p>Site porfolio pour présenter le travail d'un photographe professionel.</p>
      <p>Création d'un back-office complet avec NodeJS/SQL pour gérer les catégories et photos.</p>
    </template>
    <template #technos>
      <NuxtIcon/> <SassIcon/> <NodeIcon/> <SQLIcon/>
    </template>
  </PageTemplate>
</template>

<script setup>
import PageTemplate from '@/components/templates/PageTemplate.vue'
import OpenLinkIcon from '@/components/icons/OpenLinkIcon.vue'
import NuxtIcon from '@/components/icons/NuxtIcon.vue'
import SassIcon from '@/components/icons/SassIcon.vue'
import NodeIcon from '@/components/icons/NodeIcon.vue'
import SQLIcon from '@/components/icons/SQLIcon.vue'
</script>