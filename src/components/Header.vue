<script>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>PORTFOLIO</h1>
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

    &::after {
      content: '';
      height: 1px;
      background-color: black;
      width: 0%;
      transition: .2s ease-out;
      position: absolute;
      bottom: -5px;
      left: 0;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}
</style>