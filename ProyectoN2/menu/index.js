//Importaciones
import Nombre from "./Nombre.js"
import Color from "./Color.js"

// nombre de jugadores
let nombre1 = prompt("Ingresa tu nombre jugador 1: ");
let nombre2 = prompt("Ingresa tu nombre jugador 2: ");

// color de figuras
const color1 = prompt("Jugador 1 elige el color de tu figura: verde, naranja, morado o azul ");
const color2 = prompt("Jugador 2 elige el color de tu figura: verde, naranja, morado o azul ");

// ejecutar clases
const jugador1 = new Nombre(nombre1);
const jugador2 = new Nombre(nombre2);
const colores1 = new Color(color1);
const colores2 = new Color(color2);

// mostrar en el Dom 
let name1 = document.createElement("p");
name1.innerHTML = jugador1.mostrarNombre();
document.getElementById("jugador1").appendChild(name1);

let name2 = document.createElement("p");
name2.innerHTML = jugador2.mostrarNombre();
document.getElementById("jugador2").appendChild(name2);

let colors1 = document.getElementById('color1');
colors1.style.backgroundColor = colores1.mostrarColor(); 

let colors2 = document.getElementById('color2');
colors2.style.backgroundColor = colores2.mostrarColor(); 

// mostrar en consola
console.log(jugador1.mostrarNombre());
console.log(jugador2.mostrarNombre());
console.log(colores1.mostrarColor());
console.log(colores2.mostrarColor());

