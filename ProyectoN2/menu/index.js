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

// orden del menu
console.log(jugador1);
console.log(jugador2);

