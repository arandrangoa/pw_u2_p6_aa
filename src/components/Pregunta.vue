<template>
  <img v-if="img"
    v-bind:src="img"
    alt="No se pudo"
  />
 
  <div class="oscuro"></div>
  <div class="pregunta-container">
    <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar la pregunta con el signo de interrogacion (?)</p>
 
    <div v-show="mensaje" class="respuesta">
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta==='yes'?'SI!' :'NO!' }}</h1>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      img: null,
      mensaje: false
    };
  },
 
  watch: {
    pregunta(value, oldValue) {
      this.mensaje=false;
      console.log({ value, oldValue });
 
      if (!value.includes("?")) {
        return; //si no incluye salgase del observador
      }
      //Consumir API para obtener la respuesta
      this.obtenerRespuesta();
      this.mensaje=true;
    },
/*async prueba(){
  const data2 = await this.obtenerRespuesta();
}*/
  },
 
  methods: {
    async obtenerRespuesta() {
      this.respuesta="Pensando..."
      const data = await fetch("https://yesno.wtf/api").then(resp => resp.json());
      console.log(data);
 
      const {answer, forced, image} = data;
      console.log(answer)
 
      this.respuesta = answer;
      this.img = image;
    },
  },
};
</script>
 

<style scoped>
img,
.oscuro {
  max-height: 100%;
  height: 100vh;
  max-width: 100%;
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
}
 
.oscuro {
  background: rgba(0, 0, 0, 0.5);
  /*
  0.0 full transparente
  1.0 full opaco
  */
}
 
.pregunta-container {
  position: relative;
}
 
input {
  margin-top: 90px;
  width: 260px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
}
 
input:focus {
  outline: none;
}
 
p,
h1,
h2 {
  color: aliceblue;
}
 
p {
  font-size: 25px;
  margin-top: 0px;
}
 
.respuesta {
  margin-top: 120px;
}






</style>