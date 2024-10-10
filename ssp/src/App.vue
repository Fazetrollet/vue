<script setup>
import { ref } from 'vue'
import KnappRad from './components/KnappRad.vue';
import ResultatRad from './components/ResultatRad.vue';
import PoangRad from './components/PoangRad.vue';

const score = ref({ spelare: 0, dator: 0 })
const knappar = ref(['Sten', 'Sax', 'Påse']);
const resultat = ref({});
const vinnare = ref('');

function hittaVinnare(valdaKnappar) {
  vinnare.value = '';
 let spelare = knappar.value.indexOf(valdaKnappar.spelare)
 let dator = knappar.value.indexOf(valdaKnappar.dator)
 resultat.value = { spelare: spelare, dator: dator }
}
function reset() {
  score.value.spelare = 0
  score.value.dator = 0
  let buttons = document.getElementsByClassName('alternativ')
  for (let b of buttons) {
    b.classList.remove('spelarval')
    b.classList.remove('datorval')
  }
}
function raknaPoang(v) {
  vinnare.value = v
}
</script>

<template>
  <header>
    <h1>sten, sax, påse!</h1>
  </header>

  <main>
    <KnappRad :knappar="knappar" @valda-knappar="hittaVinnare" />
    <ResultatRad :valda-knappar="resultat" @vinnare="raknaPoang"/>
    <PoangRad :vinnare="vinnare"/>
    <div class="score">
      <button id="nolla" @click="reset">Nollställ poängen</button>
    </div>
  </main>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 1.2em;
}
.score {
  font-size: 1.2em;
  text-align: center;
}
#nolla {
  margin-top: 2em;
  padding: 0.3em 0.6em;
  font-size: 0.8em;
}
button {
  padding: 0.6em 1.2em;
  font-size: 1.2em;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

</style>
