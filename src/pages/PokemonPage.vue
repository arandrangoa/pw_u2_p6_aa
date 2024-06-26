<template>
  <div>

    <div class="puntaje">
      <h2>Intentos:{{ intentos }}</h2>
      <h2>Puntaje:{{ puntos }}</h2>
    </div>
    <h1 v-if="!pokemonCorrecto">Por favor espera...........</h1>

    <div v-else>
      <h1>Selecciona el Pokemon Correcto</h1>
      <PokemonImagen
        :idPokemon="pokemonCorrecto.id"
        :mostrarPokemon="mostrar"
      />
      <PokemonOpciones
        v-if="!mostrar"
        :pokemons="arreglo"
        @seleccionPokemon="revisarRespuesta"
      />
      <div v-if="mostrar">
        <h2>Has seleccionado el Pokémon correcto: {{ pokemonCorrecto.nombre }}.</h2>
      </div>
      <div v-if="error">
        <h2>Has seleccionado el Pokémon incorrecto. Intenta de nuevo.</h2>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import obtenerPokemonsFachada from "../clientes/ClientePokemonAPI";

export default {
  data() {
    return {
      arreglo: [],
      pokemonCorrecto: null, // Inicializar correctamente
      mostrar: false,
      error: false, // Agregar variable de estado para el error
      intentos: 0,
      puntos: 0,

    };
  },
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  methods: {
    async cargaInicial() {
      const vectorInicial = await obtenerPokemonsFachada(7);
      this.arreglo = vectorInicial;

      const indice = Math.floor(Math.random() * 7);
      this.pokemonCorrecto = this.arreglo[indice];
    },
    revisarRespuesta(dato) {
      this.intentos++;
      console.log("Se emitio un evento desde el hijo");
      console.log(dato);

      if (dato.ident === this.pokemonCorrecto.id) {
        this.mostrar = true;
        this.error = false; 
        switch(this.intentos){
          case 1:
            this.puntos +=10;
            break;
          case 2:
            this.puntos +=8;
            break;
          case 3:
            this.puntos +=5;
            break;
          case 4:
            this.puntos +=3;
            break;
          case 5:
            this.puntos +=2;
            break;
          case 6:
            this.puntos +=1;
            break;
          default:
            this.puntos +=0;
        }
      } else {
        this.error = true; 
        console.log("ERROR...........");
      }
    },
  },
  mounted() {
    this.cargaInicial();
  },
};
</script>

<style>

.puntaje{
  display: flex;
  justify-content: center;
}

h2{
  margin: 10px;
}



</style>
