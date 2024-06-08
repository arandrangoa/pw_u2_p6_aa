<template>
  <img src="./assets/logo.png" alt="No existe el logo" />
  <Contador titulo="Estudiante" :num="-1" />
  <Contador titulo="Profesor"  />
  <Contador :num="calcularValor()" />
  
</template>
 
<script>
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Contador,
  },
  methods:{
    calcularValor(){
      return 10+2;
    }
  }
};
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
