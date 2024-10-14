<script setup>
import { provide, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const HomeViews = ref(0)

provide('HomeViews', HomeViews)
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/my">min sida</RouterLink>
        <RouterLink to="/users">Användarsida</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
