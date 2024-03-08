<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header/>
  <RouterView />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  align-items: center;
}

nav {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    text-decoration: none;

    &:first-of-type {
      border: 0;
    }

    &.router-link-exact-active {
      color: var(--color-text);
    }

    &.router-link-exact-active:hover {
      background-color: transparent;
    }
  }
}
</style>
