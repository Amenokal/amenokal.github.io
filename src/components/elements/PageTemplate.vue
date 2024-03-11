<template>
  <div class="project">
    <h2><slot name="title"/></h2>
    <h3><slot name="subtitle"/></h3>

    <div v-if="!hideGalery">
      <div class="galery">
        <div class="mockup"/>
        <div class="mockup"/>
        <div class="mockup"/>
      </div>
    </div>
    <slot class="content" v-else name="content"/>

    <h4>Projet</h4>
    <p><slot name="project"/></p>

    <h4>Features</h4>
    <p><slot name="features"/></p>

    <h4>Technos</h4>
    <p class="technos"><slot name="technos"/></p>
  </div>
</template>

<script setup>
const { hideGalery = false } = defineProps(['hideGalery'])
</script>

<style lang="scss">
.project {
  height: 100%;
  width: 100%;
  padding: 1rem 3rem;
  overflow-y: scroll;

  h2 {
    font-size: 3.5rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: .15rem;
    position: relative;
    line-height: 3.5rem;
    width: max-content;
  }

  h3 {
    display: inline-flex;
    font-size: 2rem;
    align-items: center;
    position: relative;
    left: 3rem;
    box-sizing: border-box;
    margin-right: 2rem;
    line-height: 2rem;
    margin-bottom: 1rem;

    &::before {
      content: '>';
      position: absolute;
      top: 0;
      left: -1.5rem;
    }
  }

  h4 {
    font-size: 1.7rem;
    font-weight: 100;
    position: relative;
    padding-top: 1rem;
    border-bottom: 1px solid lightgray;
    margin-bottom: 1.5rem;
  }

  .galery {
    height: 250px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    gap: .25rem;
    box-sizing: border-box;

    .mockup {
      border: 1px solid lightgray;
    }
  }

  .technos {
    svg {
      height: 4rem;
      width: 4rem;
      margin-right: 2rem;
    }

    .horizontal-icon {
      height: 8rem;
      width: 8rem;
      margin: -2rem 1.5rem -2rem 0;
    }
  }
}
</style>