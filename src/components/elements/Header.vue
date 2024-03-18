<template>
  <header>
    <h1>lucien cauchy</h1>
    <nav>
      <RouterLink to='/'>Projets</RouterLink>
      <RouterLink to='/about'>À propos</RouterLink>
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
  padding: .5rem 3rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 2.5rem;
    margin-left: -.5rem;
    display: flex;
    align-items: center;
  }
  
  nav {
    display: flex;
    align-items: center;
    
    a {
      margin-left: 1.5rem;
      text-transform: lowercase;
      color: black;
      font-size: 1.2rem;
      text-decoration: none;
      position: relative;
      border-bottom: 3px solid transparent;
    
      &:visited {
        color: black;
      }
  
      &:hover,
      &.router-link-active,
      &.router-link-exact-active {
        border-bottom: 3px solid lightgray;
      }
    }
  }
}
</style>