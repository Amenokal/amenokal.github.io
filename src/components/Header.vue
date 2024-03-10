<script>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Lucien Cauchy</h1>
    <nav>
      <RouterLink to='/'>Projets</RouterLink>
      <RouterLink to='/about'>À propos</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 10vh;
  min-height: 70px;
  padding: .5rem 5rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 100;
    letter-spacing: .1rem;
    font-size: 2.5rem;
  }

  a {
    margin-left: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;

    &::before {
      content: '';
      height: .8rem;
      background-color: rgba(8, 8, 8, .1);
      width: 0%;
      transition: .2s ease-out;
      position: absolute;
      top: 0rem;
      right: -.8rem;
      transform: rotate(180deg);
      z-index: -1;
    }
    &::after {
      content: '';
      height: .8rem;
      background-color: rgba(8, 8, 8, .3);
      width: 0%;
      transition: .2s ease-out;
      position: absolute;
      bottom: 0rem;
      left: -.8rem;
      z-index: -1;
    }

    &:hover {
      &::before {
        width: 110%;
      }
      &::after {
        width: 110%;
      }
    }
  }
}
</style>