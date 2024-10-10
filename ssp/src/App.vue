<script setup>
import { ref } from 'vue'
import KnappRad from './components/KnappRad.vue';
import ResultatRad from './components/ResultatRad.vue';
import PoangRad from './components/PoangRad.vue';

const knappar = ref(['Sten', 'Sax', 'Påse']);
const resultat = ref({});
const vinnare = ref('');
const reset = ref(true);

function hittaVinnare(valdaKnappar) {
  vinnare.value = '';
  reset.value = false;
 let spelare = knappar.value.indexOf(valdaKnappar.spelare)
 let dator = knappar.value.indexOf(valdaKnappar.dator)
 resultat.value = { spelare: spelare, dator: dator }
 reset.value = false
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
    <KnappRad :knappar="knappar" @valda-knappar="hittaVinnare" :reset="reset"/>
    <ResultatRad :valda-knappar="resultat" @vinnare="raknaPoang" :reset="reset"/>
    <PoangRad :vinnare="vinnare" :reset="reset"/>
    <div class="score">
      <button id="nolla" @click="reset = true">Nollställ poängen</button>
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
