<script setup>
import { inject, onMounted, ref } from 'vue'

const tid = ref(new Date().toLocaleString())
const views = inject('HomeViews')
onMounted(() => {
  views.value++
})
</script>

<template>
  <main>
    <p>
      när sidan laddades var klockan...<br />
      {{ tid }}
    </p>
    <p>
      denna sidan har visats:
      <b>{{ views }}</b>
    </p>
    <ul>
      två till synes lika länkar som fungerar på olika sätt:
      <li>
        <a href="/my">My View</a>
      </li>
      <li>
        <RouterLink to="/my">My View</RouterLink>
      </li>
    </ul>
  </main>
</template>
