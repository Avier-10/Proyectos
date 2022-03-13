//Importaciones
import Nombre from "./Nombre.js"
import Color from "./Color.js"

// nombre de jugadores
let nombre1 = prompt("Ingresa tu nombre jugador 1: ");
let nombre2 = prompt("Ingresa tu nombre jugador 2: ");

// color de figuras
const color1 = prompt("Jugador 1 elige el color de tu figura: verde, naranja, morado o azul ");
const color2 = prompt("Jugador 2 elige el color de tu figura: verde, naranja, morado o azul ");

const jugador1 = new Nombre(nombre1);
const jugador2 = new Nombre(nombre2);

// mostrar en el Dom 
let name1 = document.createElement("p");
name1.innerHTML = jugador1.nombre;
document.getElementById("jugador1").appendChild(name1);

let name2 = document.createElement("p");
name2.innerHTML = jugador2.nombre;
document.getElementById("jugador2").appendChild(name2);

// mostrar en consola
console.log(jugador1);
console.log(jugador2);

