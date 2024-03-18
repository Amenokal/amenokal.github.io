<template>
  <PageTemplate>
    <template #title>Vue Components</template>
    <template #subtitle>Library personnelle de composants Vue</template>
    <template #links>
      <a href="https://github.com/Amenokal/vue-composables" target="_blank">Voir le code <OpenLinkIcon/></a>
    </template>
    <template #project>
      <p>Réalisation d'une documentation Vue3 sur les concepts et des composants réutilisables à l'intention des collègues d'entreprise.</p>
      <p>Articles écrits et récupérés via des fichiers Markdown.</p>
    </template>
    <template #technos>
      <VueIcon/>
    </template>
  </PageTemplate>
</template>

<script setup>
import PageTemplate from '@/components/templates/PageTemplate.vue'
import OpenLinkIcon from '@/components/icons/OpenLinkIcon.vue'
import VueIcon from '@/components/icons/VueIcon.vue'
</script>