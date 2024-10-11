<script setup>
import { inject } from 'vue'

const views = inject('HomeViews')
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <p>
    HomeViews har vissats
    <b>{{ views }}</b>
    gånger
  </p>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
