<template>
  <div class="home">
    <h1 class="title">Sten, Sax, Påse</h1>
    <KnappRad :knappar="knappar" @valda-knappar="hittaVinnare" :reset="reset" />
    <ResultatRad :valda-knappar="resultat" @vinnare="raknaPoang" :reset="reset" />
    <PoangRad :vinnare="vinnare" :reset="reset" />

    <!-- Knapp för att nollställa spelet och en knapp för att komma till sidan som är bäst av fem spelet -->
    <div class="buttons">
      <button @click="resetGame">Nollställ poäng</button>
      <button @click="tillBestAvFem">Spela Bäst av Fem</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import KnappRad from './components/KnappRad.vue'
import ResultatRad from './components/ResultatRad.vue'
import PoangRad from './components/PoangRad.vue'

const router = useRouter()

// Skapar en variabel med alternativen 'Sten', 'Sax', 'Påse'
const knappar = ref(['Sten', 'Sax', 'Påse'])

// 'resultat' lagrar valda alternativ från spelare och dator, 'vinnare' för vem som vunnit, 'reset' anger om spelet är i resetläge
const resultat = ref({})
const vinnare = ref('')
const reset = ref(true)

// Funktion för att bestämma vinnaren baserat på de valda alternativen från spelaren och datorn
function hittaVinnare(valdaKnappar) {
  vinnare.value = '' // Nollställer vinnaren
  reset.value = false // gör reset till false
  resultat.value = {
    spelare: knappar.value.indexOf(valdaKnappar.spelare), // Hittar indexet för spelarens val
    dator: knappar.value.indexOf(valdaKnappar.dator) // Hittar indexet för datorns val
  }
}

// Funktion för att uppdatera vinnaren baserat på spelresultatet
function raknaPoang(v) {
  vinnare.value = v
}

// Funktion för att nollställa spelet
function resetGame() {
  reset.value = true
}

// Funktion för att navigera till bäst av fem sidan
function tillBestAvFem() {
  router.push({ name: 'bestAvFem' })
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2em;
}
.title {
  font-size: 2em;
  margin-bottom: 1.5em;
}
.buttons {
  display: flex;
  gap: 1em;
  margin-top: 1.5em;
}
button {
  padding: 0.6em 1.2em;
  font-size: 1em;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #45a049;
}
</style>
