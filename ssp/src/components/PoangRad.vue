<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['vinnare', 'reset'])
const score = ref({ spelare: 0, dator: 0 })

watch(
  () => props.vinnare,
  () => {
    if (props.vinnare === 'spelare') {
      score.value.spelare++
    } else if (props.vinnare === 'dator') {
      score.value.dator++
    }
  }
)
watch(
  () => props.reset,
  () => {
    if (props.reset) {
      score.value.spelare = 0
      score.value.dator = 0
    }
  }
)
</script>

<template>
  <div class="score">
    <p>
      <span id="spelare">
        {{ score.spelare }}
      </span>
      -
      <span id="dator">
        {{ score.dator }}
      </span>
    </p>
  </div>
</template>
<style scoped>
.score {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em; /* Gör texten lite större */
  font-weight: bold;
  margin: 1.5em 0;
}

/* Knapp för att nollställa poängen */
#nolla {
  padding: 0.5em 1em;
  font-size: 1em;
  background-color: #f44336; /* Röd färg för nollställningsknappen */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1em;
}

#nolla:hover {
  background-color: #d32f2f; /* Mörkare röd vid hover */
}
</style>
