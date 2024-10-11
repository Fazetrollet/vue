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
  </main>
</template>
