<template>
  <header>
    <h1>LC</h1>
    <nav>
      <RouterLink to='/'>Projets</RouterLink>
      <RouterLink to='/about'>À propos</RouterLink>
      <RouterLink to='/about'>Contact</RouterLink>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
header {
  height: 10vh;
  min-height: 70px;
  padding: .5rem 2rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 900;
    font-size: 3.5rem;
  }
  
  a {
    margin-left: 1.5rem;
    text-transform: lowercase;
    font-weight: 0900;
  }
}
</style>