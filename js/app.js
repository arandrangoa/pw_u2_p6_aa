console.log(Vue)

const estudiantes = [{ nombre: "Alex", apellido: "Andrango" },
{ nombre: "Bryan", apellido: "Mullo" },
{ nombre: "Darleen", apellido: "Calvachi" },
{ nombre: "Karen", apellido: "Garcia" },
{ nombre: "Mashiel", apellido: "Tuquerres" }
];

const app = Vue.createApp({
    /* template:` 
     <h1>Hola Mundo desde VUE.JS</h1>
     <p>{{1+1}}</p>
     <p>{{[1,2,3,4,5,6,7,8]}}
     <p>{{false?'True':'False'}}</p>
     `*/
    //decalaracion de una propiedad reactiva
    data() {
        return {
            mensaje: "Hola mundo propiedad reactiva",
            valor: 7,
            lista: estudiantes,
            //Cuando tengo un ingreso de datos(un input)
            nombre: null,
            apellido: null

        }
    },
    //
    methods: {
        //nomenclatura de los metodos
        cambiarTexto() {
            //toda propiedad reactiva que se usa dentro de codigo js
            //en especial archivo js debe tener el js
            this.mensaje = "Texto cambiado";
        },
        sumar() {
            this.valor = this.valor + 100;
        },
        agregar() {
            console.log(this.nombre);
            console.log(this.apellido);
            const nuevo = {
                nombre: this.nombre,
                apellido: this.apellido
            }
            this.lista.unshift(nuevo);
            this.resetear();
            
        },
        resetear() {
            this.nombre = null;
            this.apellido = null;

        },
        //
        agregar2({charCode}){
            //console.log(event)

            console.log(charCode)

            if(charCode !=13) return;
            if(this.nombre!==null && this.apellido!==null) {
                this.agregar();
            }
            
            
        }

    }
});

//Siempre es un estandar usar #myApp
app.mount('#myApp')
