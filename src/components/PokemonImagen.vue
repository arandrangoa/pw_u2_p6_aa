<template>
<div class="pokemon-container">
  <img v-show="mostrar"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
    alt="Bo se pudo visualizar imagen"
  />
  <img v-show="!mostrar"
    class="oculta-pokemon"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
    alt="Bo se pudo visualizar imagen"
  />
  </div>
</template>

<script>
export default {
    data() {
    return {
      mostrar: false,
    };
  }


};
</script>

<style scoped>
.oculta-pokemon {
  filter: brightness(0);
}

img {
  height: 200px;
  width: 200px;
  position: absolute;
  right: 37%;
}

.pokemon-container{
    height: 200px;
}
</style>