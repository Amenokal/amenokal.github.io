<template>
  <PageTemplate>
    <template #title>La Quête du flan parfait</template>
    <template #subtitle>Mais où se trouve-t'il ?</template>
    <template #links>
      <a href="https://github.com/Amenokal/exam-front" target="_blank">Voir le code <OpenLinkIcon/></a>
    </template>
    <template #project>
      <p>Création d'une app en Vue3/NodeJS pour rassembler les passionnés de flan pâtissier et leur permettre via une app communautaire de déterminer où se trouve les flans les plus délicieux en France.</p>
      <p>Les utilisateurs peuvent trouver les boulangeries en France sur une carte interactive et s'inscrire pour noter les flans qu'on y trouve selon des caractéristiques définies.</p>
    </template>
    <template #technos>
      <VueIcon/> <SassIcon/> <NodeIcon/> <MongoIcon/>
    </template>
  </PageTemplate>
</template>

<script setup>
import PageTemplate from '@/components/templates/PageTemplate.vue'
import OpenLinkIcon from '@/components/icons/OpenLinkIcon.vue'
import VueIcon from '@/components/icons/VueIcon.vue'
import SassIcon from '@/components/icons/SassIcon.vue'
import NodeIcon from '@/components/icons/NodeIcon.vue'
import MongoIcon from '@/components/icons/MongoIcon.vue'
</script>