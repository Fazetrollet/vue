<template>
  <div class="baf">
    <h1 class="ba">Bäst av Fem</h1>
    <KnappRad :knappar="knappar" @valda-knappar="hittaVinnare" :reset="reset" />
    <ResultatRad :valda-knappar="resultat" @vinnare="raknaPoang" :reset="reset" />
    <PoangRad :vinnare="vinnare" :reset="reset" />
    <p>{{ spelStatus }}</p>
    <button @click="tillbakaTillHem">Tillbaka till Hem</button>

    <!-- Modal för att visa resultat och nedräkning -->
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import KnappRad from '../components/KnappRad.vue'
import ResultatRad from '../components/ResultatRad.vue'
import PoangRad from '../components/PoangRad.vue'

const router = useRouter()

const knappar = ref(['Sten', 'Sax', 'Påse'])
const resultat = ref({ spelare: '', dator: '' })
const spelarePoang = ref(0)
const datorPoang = ref(0)
const spelStatus = ref('Först till tre vinster vinner!')
const countdown = ref(5)
const modalVisible = ref(false)
const reset = ref(false)
const slutResultat = ref('') // Text för att visa om någon har vunnit bäst av fem

function hittaVinnare(valdaKnappar) {
  resultat.value = valdaKnappar
  modalVisible.value = true
  countdown.value = 5
  startCountdown()
}

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

function raknaPoang(vinnare) {
  if (vinnare === 'spelare') spelarePoang.value++
  else if (vinnare === 'dator') datorPoang.value++

  if (spelarePoang.value >= 3) {
    slutResultat.value = 'Grattis! Du vann bäst av fem!'
    modalVisible.value = true
  } else if (datorPoang.value >= 3) {
    slutResultat.value = 'Datorn vann bäst av fem! Försök igen.'
    modalVisible.value = true
  }
}

function checkOmNågonVunnit() {
  if (spelarePoang.value >= 3 || datorPoang.value >= 3) {
    startaOm()
  }
}

function startaOm() {
  spelarePoang.value = 0
  datorPoang.value = 0
  spelStatus.value = 'Först till tre vinster vinner!'
  slutResultat.value = ''
}

function tillbakaTillHem() {
  router.push({ name: 'Home' })
}
</script>

<style scoped>
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
</style>
