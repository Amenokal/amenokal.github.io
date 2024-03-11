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
      <div class="animation-pannel"/>
      <component :is="projects[projectId].component"/>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Portfolio from '@/components/projects/Portfolio.vue'
import LaStation from '@/components/projects/LaStation.vue'
import XavierCauchy from '@/components/projects/XavierCauchy.vue'
import VueComponents from '@/components/projects/VueComponents.vue'
import ThreeScene from '@/components/projects/ThreeScene.vue'
import SvgBg from '@/components/elements/SvgBg.vue'

const projectId = ref(0)
const projects = [
  { name: "portfolio", component: Portfolio },
  { name: "la-station.com", component: LaStation },
  { name: "xavier-cauchy.com", component: XavierCauchy },
  { name: "vue components", component: VueComponents },
  { name: "three js", component: ThreeScene }
]

function changeProject(id) {
  if(projectId.value === id)
  return

  const animationTime = 800
  const animPannel = document.querySelector('.animation-pannel')
  animPannel.classList.add('active')

  setTimeout(() => projectId.value = id, animationTime / 2)
  setTimeout(() => animPannel.classList.remove('active'), animationTime)
}
</script>
  
<style lang="scss" scoped>
main {
  height: 90vh;
  display: flex;

  &>div {
    height: 100%;
  }

  .left {
    position: relative;
    width: 20%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 3px solid black;

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
    width: 80%;
    position: relative;
    overflow: hidden;

    .animation-pannel {
      height: 100%;
      width: 0%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: lightgray;
      transform: skewX(-10deg);
      z-index: 2;

      &.active {
        animation: changePannel .8s;
      }
    }
  }
}

@keyframes changePannel {
  from { width: 0%; left: -5%; }
  30% { width: 120%; left: -5%; }
  70% { width: 120%; left: -5%; }
  to { width: 120%; left: 100%; }
}
</style>