<template>
  <ProjectTemplate>
    <template #title>Générateur procédural</template>
    <template #subtitle>Projet personnel</template>
    <template #content>
      <div id="gameScreen">
        <div class="GUI">
          <button @click="scene.reset()">Générer</button>
          <p @click="handleCheckBox(0)"><span class="checkbox" :class="{'checked': checkedBox === 0}"/>Île</p>
          <p @click="handleCheckBox(1)"><span class="checkbox" :class="{'checked': checkedBox === 1}"/>Vallée</p>
          <p @click="handleCheckBox(2)"><span class="checkbox" :class="{'checked': checkedBox === 2}"/>Lac</p>
        </div>
      </div>
    </template>
  </ProjectTemplate>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScene } from '@/composables/useScene.js'
import { setConfig } from '@/scripts/config.js'
import ProjectTemplate from '../ProjectTemplate.vue'

const scene = useScene()
onMounted(() => scene.start())
onUnmounted(() => scene.destroy())

const checkedBox = ref(0)
function handleCheckBox(id) {
  if(checkedBox.value === id)
  return

  checkedBox.value = id
  setConfig(id)
  scene.reset()
}
</script>

<style lang="scss" scoped>
.GUI {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  display: flex;
  flex-direction: column;

  button {
    color: white;
    text-transform: uppercase;
    padding: .5rem 1rem;
    border: 3px solid white;
    background-color: transparent;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: .5rem;
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;

    span {
      display: block;
      height: 1rem;
      width: 1rem;
      border: 3px solid white;
      margin-left: 1rem;

      &.checked {
        background-color: white;
      }
    }
  }
}
#gameScreen {
  height: 100%;
  width: 100%;
  filter: saturate(1.1) contrast(1.1);
  border: 1px solid black;
}
</style>