//Importaciones

// nombre de jugadores
let nombre1 = prompt("Ingresa tu nombre jugador 1: ");
let nombre2 = prompt("Ingresa tu nombre jugador 2: ");

// color de figuras
//const color1 = prompt("Jugador 1 elige el color de tu figura: verde, naranja, morado o azul ");
// const color2 = prompt("Jugador 2 elige el color de tu figura: verde, naranja, morado o azul ");

// ejecutar clase
const jugador1 = new Jugadores(nombre1);
const jugador2 = new Jugadores(nombre2);

// mostrar en el Dom 
let name1 = document.createElement("p");
name1.innerHTML = jugador1.mostrarNombre();
document.getElementById("nombrecont1").appendChild(name1);

let name2 = document.createElement("p");
name2.innerHTML = jugador2.mostrarNombre();
document.getElementById("nombrecont2").appendChild(name2);

// let colors1 = document.getElementById('color1');
// colors1.style.backgroundColor = jugador1.mostrarColor(); 

// let colors2 = document.getElementById('color2');
// colors2.style.backgroundColor = jugador2.mostrarColor(); 

// mostrar en consola
console.log(jugador1);
console.log(jugador2);
