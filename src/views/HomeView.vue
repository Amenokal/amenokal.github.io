<template>
  <main>
    <div class="left">
      <SvgBg/>
      <button
        v-for="(project, i) of projects" @click="changeProject(i)"
        :key="project.id"
        :class="{'active': projectId === i}"
      >
        {{ project.name }}
      </button>
    </div>

    <div class="right">
      <component :is="projects[projectId].component"/>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import FlanQuest from '@/components/projects/FlanQuest.vue'
import LaStation from '@/components/projects/LaStation.vue'
import XavierCauchy from '@/components/projects/XavierCauchy.vue'
import VueComponents from '@/components/projects/VueComponents.vue'
import ThreeScene from '@/components/projects/ThreeScene.vue'
import SvgBg from '@/components/elements/SvgBg.vue'

const projectId = ref(0)
const projects = [
  { name: "la-station.com", component: LaStation },
  { name: "algorithmie procédurale", component: ThreeScene },
  { name: "xavier-cauchy.com", component: XavierCauchy },
  { name: "la quête du flan parfait", component: FlanQuest },
  { name: "documentation vue3", component: VueComponents },
]

function changeProject(id) {
  projectId.value = id
  document.querySelector('.right').scrollTo({ top: 0, behavior: "smooth" })
}

</script>
  
<style lang="scss" scoped>
main {
  height: 90vh;
  display: flex;

  .left {
    width: 20%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 3px solid black;
    left: 0%;
    transition: .25s ease-out;

    &.hide {
      left: -20% !important;
    }

    button {
      width: 90%;
      font-size: 1.5rem;
      border: 3px solid black;
      background: transparent;
      padding: .2rem .5rem;
      cursor: pointer;
      margin: .5rem 1rem ;
      background-color: white;
      position: relative;
      left: .3rem;
      
      &::before {
        content: '';
        height: 100%;
        width: 10px;
        border: 3px solid black;
        border-right: none;
        position: absolute;
        top: 3.5px;
        left: -16px;
        transform: skewY(-45deg);
        background-color: darkgray;
;
      }
      &::after {
        content: '';
        height: 10px;
        width: 100%;
        border: 3px solid black;
        border-top: none;
        position: absolute;
        bottom: -16px;
        right: 3.5px;
        transform: skewX(-45deg);
        background-color: darkgray;
;
      }
      
      &:hover, &.active {
        transform: translate(-9px, 9px);
        
        &::before {
          width: 1px;
          transform: skewY(-45deg) translate(9px, 4.5px);
        }
        &::after {
          height: 1px;
          transform: skewX(-45deg) translate(-4.5px, -9px);
        }
      }
    }
  }
  .right {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>