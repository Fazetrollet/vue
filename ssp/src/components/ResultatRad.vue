<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['valdaKnappar', 'reset']);
const emit = defineEmits(['vinnare']);
const resultat = ref('Låt spelet börja');

watch(props, () => {
     if (props.valdaKnappar.spelare == props.valdaKnappar.dator) {
        resultat.value = 'Oavgjort!'
     } else if (props.valdaKnappar.spelare % 2 == props.valdaKnappar.dator % 2) {
        //samma partitet - högsta talet vinner
    if (props.valdaKnappar.spelare > props.valdaKnappar.dator) {
        resultat.value = 'du vann!'
        emit('vinnare', 'spelare')
    } else {
        resultat.value = 'Datorn vann!'
        emit('vinnare', 'dator')
    }
    } else {
        //olika partiet - lägsta talet vinner
    if(props.valdaKnappar.spelare < props.valdaKnappar.dator) {
        resultat.value = 'Du vann!'
        emit('vinnare', 'spelare')
    } else {
        resultat.value = 'Datorn vann!'
        emit('vinnare', 'dator')
    }
    }
     })
     watch(()=> props.reset, ()=> {
  if (props.reset) {
    resultat.value ="nu börjar vi om"
  }
})

</script>
<template>
    <div class="resultat">
        <p id="resultat">{{ resultat }}</p>
    </div>  
</template>
<style scoped>
.resultat {
  font-size: 1.2em;
  text-align: center;
  margin: 1.2em 0;
}
</style>