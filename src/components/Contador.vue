<template>
  <h2>{{presentar}}</h2>
  <p>{{ numero }} <sup>2</sup>={{ calcular }}</p>
 
  <div>
    <button @click="incrementar">+1</button>
    <button v-on:click="disminuir">-1</button>
  </div>
</template>
 
<script>
export default {
  props: ["titulo", "num"],
  data() {
    return {
      numero: 5,
    };
  },
  methods: {
    calcularCuadrado() {
      console.log("Ingreso al metodo");
      return this.numero * this.numero;
    },
 
    calcularCuadrado2(num1, num2) {
      console.log("Ingreso al metodo");
      return num1 * num2;
    },
    incrementar() {
      this.numero++;
    },
    disminuir() {
      this.numero--;
    },
  },
  computed: {
    calcular() {
      console.log("Ingreso a la propiedad computada");
      return this.numero * this.numero;
    },
    presentar() {
if(this.titulo !== undefined){
return this.titulo
}else{
  return "texto que quiero";
}
    }
  },
};
</script>
 
<style>
button {
  background: rgb(97, 167, 132);
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  margin: 0px 5px;
  padding: 5px 15px;
  cursor: pointer;
}
 
button:hover {
  background: rgb(61, 63, 58);
}
</style>