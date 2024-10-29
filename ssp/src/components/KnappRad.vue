<script setup>
import { watch } from 'vue'

const props = defineProps(['knappar', 'reset'])
const emit = defineEmits(['valdaKnappar'])

watch(
  () => props.reset,
  () => {
    if (props.reset) {
      let buttons = document.getElementsByClassName('alternativ')
      for (let b of buttons) {
        b.classList.remove('spelarval')
        b.classList.remove('datorval')
        b.title = ''
      }
    }
  }
)

function spelarval(e) {
  let buttons = document.getElementsByClassName('alternativ')
  for (let b of buttons) {
    b.classList.remove('spelarval')
  }
  e.target.classList.add('spelarval')
  emit('valdaKnappar', { spelare: e.target.textContent, dator: datorval() })
}

function datorval() {
  let val = Math.floor(Math.random() * props.knappar.length)
  let buttons = document.getElementsByClassName('alternativ')
  for (let b of buttons) {
    b.classList.remove('datorval')
    b.title = ''
    if (b.textContent == props.knappar[val]) {
      b.classList.add('datorval')
      b.title = 'Datorns val'
    }
  }
  return props.knappar[val]
}
</script>

<template>
  <div class="knapprad">
    <button v-for="knapp in props.knappar" class="alternativ" :key="knapp" @click="spelarval">
      <img v-if="knapp === 'Sten'" src="@/assets/sten.png" alt="Sten" class="knapp-bild" />
      <img v-else-if="knapp === 'Sax'" src="@/assets/sax.png" alt="Sax" class="knapp-bild" />
      <img v-else src="@/assets/pase.png" alt="Påse" class="knapp-bild" />
      <span>{{ knapp }}</span>
    </button>
  </div>
</template>

<style scoped>
button.spelarval {
  background-color: greenyellow;
}
button.datorval {
  border: red solid 2px;
}
button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6em 1.2em;
  font-size: 1.2em;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
.knapprad {
  display: flex;
  justify-content: center;
  gap: 0.6em;
}
.knapp-bild {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5em;
}
</style>
