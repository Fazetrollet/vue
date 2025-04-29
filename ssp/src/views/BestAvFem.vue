<template>
  <div class="baf">
    <h1 class="ba">Bäst av Fem</h1>
    <!-- Knapprad för att välja Sten, Sax eller Påse -->
    <KnappRad :knappar="knappar" @valda-knappar="hittaVinnare" :reset="reset" />
    <!-- Visar aktuell poängställning -->
    <div class="score">Ställning: Du {{ spelarePoang }} - Datorn {{ datorPoang }}</div>
    <!-- Visar resultatet av senaste omgången -->
    <ResultatRad :valda-knappar="resultat" :reset="reset" />
    <p>{{ spelStatus }}</p>
    <!-- Knapp för att gå tillbaka till startsidan -->
    <button @click="tillbakaTillHem">Tillbaka till Hem</button>

    <!-- Modalruta som visar val, poäng och nedräkning efter varje omgång -->
    <div v-if="modalVisible" class="modal">
      <div class="modal-content">
        <div class="countdown">{{ countdown }}</div>
        <p>Du valde: {{ resultat.spelare }}</p>
        <p>Datorn valde: {{ resultat.dator }}</p>
        <p>Ställning: Du {{ spelarePoang }} - Datorn {{ datorPoang }}</p>
        <p>{{ slutResultat }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importerar nödvändiga funktioner och komponenter
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import KnappRad from '../components/KnappRad.vue'
import ResultatRad from '../components/ResultatRad.vue'
import PoangRad from '../components/PoangRad.vue'

// Router för navigering mellan sidor
const router = useRouter()

// Alternativen för spelet
const knappar = ref(['Sten', 'Sax', 'Påse'])
// Sparar senaste valen
const resultat = ref({ spelare: '', dator: '' })
// Poängräkning
const spelarePoang = ref(0)
const datorPoang = ref(0)
// Statusmeddelande
const spelStatus = ref('Först till tre vinster vinner!')
// Nedräkning för modal
const countdown = ref(5)
// Visar eller döljer modalrutan
const modalVisible = ref(false)
// Om spelet ska nollställas
const reset = ref(false)
// Text som visas när någon vunnit bäst av fem
const slutResultat = ref('')

// Funktion som körs när spelaren gör ett val
function hittaVinnare(valdaKnappar) {
  // Spara valen som strängar
  resultat.value = {
    spelare: valdaKnappar.spelare,
    dator: valdaKnappar.dator
  }

  // Avgör vinnaren enligt spelets regler
  let winner = ''
  const spelare = valdaKnappar.spelare
  const dator = valdaKnappar.dator

  if (spelare === dator) {
    winner = 'oavgjort'
  } else if (
    (spelare === 'Sten' && dator === 'Sax') ||
    (spelare === 'Sax' && dator === 'Påse') ||
    (spelare === 'Påse' && dator === 'Sten')
  ) {
    winner = 'spelare'
  } else {
    winner = 'dator'
  }

  // Uppdatera poäng
  raknaPoang(winner)
  // Visa modalruta och starta nedräkning
  modalVisible.value = true
  countdown.value = 5
  startCountdown()
}

// Startar nedräkning i modalrutan
function startCountdown() {
  const interval = setInterval(() => {
    countdown.value -= 1
    if (countdown.value === 0) {
      clearInterval(interval)
      modalVisible.value = false
      checkOmNågonVunnit()
    }
  }, 1000)
}

// Uppdaterar poäng beroende på vinnare
function raknaPoang(vinnare) {
  if (vinnare === 'spelare') {
    spelarePoang.value++
  } else if (vinnare === 'dator') {
    datorPoang.value++
  }

  // Kontrollera om någon har vunnit bäst av fem
  if (spelarePoang.value >= 3) {
    slutResultat.value = 'Grattis! Du vann bäst av fem!'
    modalVisible.value = true
  } else if (datorPoang.value >= 3) {
    slutResultat.value = 'Datorn vann bäst av fem! Försök igen.'
    modalVisible.value = true
  }
}

// Kollar om någon har vunnit bäst av fem och nollställer spelet
function checkOmNågonVunnit() {
  if (spelarePoang.value >= 3 || datorPoang.value >= 3) {
    startaOm()
  }
}

// Nollställer spelet
function startaOm() {
  spelarePoang.value = 0
  datorPoang.value = 0
  spelStatus.value = 'Först till tre vinster vinner!'
  slutResultat.value = ''
}

// Navigerar tillbaka till startsidan
function tillbakaTillHem() {
  router.push({ name: 'start' })
}
</script>

<style scoped>
/* Modalruta för resultat och nedräkning */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

.countdown {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 1.2em;
  font-weight: bold;
  color: #555;
}
.score {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 1em;
  text-align: center;
}
</style>
