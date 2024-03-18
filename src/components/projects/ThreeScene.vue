<template>
  <PageTemplate :hideGalery="true">
    <template #title>Algorithmie Procédurale</template>
    
    <template #subtitle>Générateur de paysages numériques</template>

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

    <template #technos>
      <JSIcon/> <ThreeIcon/>
    </template>
  </PageTemplate>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThree } from '@/composables/useThree'
import { useScene } from '@/composables/useScene.js'
import { setConfig } from '@/scripts/config.js'
import PageTemplate from '@/components/templates/PageTemplate.vue'
import JSIcon from '@/components/icons/JSIcon.vue'
import ThreeIcon from '@/components/icons/ThreeIcon.vue'

const three = useThree()
const scene = useScene()

onMounted(async () => {
  await three.loadAssets()
  scene.start()
})
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
}
</style>