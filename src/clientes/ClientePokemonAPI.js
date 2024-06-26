/*Funcionalidad para obtener un vector de 4 elementos aleatorios*/

const obtenerVectorNumerico = (longitud)=>{
    const vector=[];
    for (let i=0; i<longitud; i++){
        vector[i]= obtenerAleatorio(1,649);
    }
    return vector;
}

/*Funcion aleatoria entre un valor maximo y minimo*/
function obtenerAleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

/*A partir de ese vector me retorne los nombre de los pokemon*/
const obtenerPokemons= async (longitud)=>{
    const vectorFinal=[];
    const vector=obtenerVectorNumerico(longitud);
    for( let i=0; i<vector.length; i++){
        vectorFinal[i]=await construirPokemon(vector[i]);
    }
    return vectorFinal;
}

async function construirPokemon(identificador){

    const data= await consumirPokeApi(identificador);
    const objetoPokemon={
        /*Se busca en el Json */
        nombre: data.species.name,
        id: data.id
    }
    return objetoPokemon;
}

const consumirPokeApi= async(id) =>{

    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());

}
//fachada la cual se llama igual que el mismo metodo que
//el metodo que quiero 
//exportar con el sufijo FACHADA

const obtenerPokemonsFachada= async(longitud)=>{
    return await obtenerPokemons(longitud)
}

//Metodo simple Default para ecportar un solo metodo
export default obtenerPokemonsFachada;








