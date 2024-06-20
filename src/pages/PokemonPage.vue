<template>

<h1>Selecciona el Pokemon Correcto</h1>
<PokemonImagen/>
<PokemonOpciones/>
  
</template>

<script>

import PokemonImagen from '../components/PokemonImagen.vue'
import PokemonOpciones from '../components/PokemonOpciones.vue'

export default {
    components:{
        PokemonImagen,
        PokemonOpciones
    }

}
</script>

<style>

</style>