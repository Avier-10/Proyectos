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


// color jugador 1
const verde = "#1bd832"
const naranja = "#ff4500"
const morado = "#800080"
const azul = "#20b2aa"

const color = ["verde", "naranja", "morado", "azul"];

const colores = document.querySelector("#radioColores");
colores.innerHTML = color.map((colores) => 
    `<div>
      <input type="radio" name="colores" value="${colores}" id="${colores}">
      <label for="${colores}">${colores}</label>
    </div>`).join(' ');

const radioButtons = document.querySelectorAll('input[name="colores"]');
for(const radioButton of radioButtons){
    radioButton.addEventListener('change', colorSeleccionado);
} 


function colorSeleccionado() {

    if (this.checked) {
        if("azul" === this.value){
            console.log(azul)
        }else if("verde" === this.value){
            console.log(verde)
        }else if("naranja" === this.value){
            console.log(naranja)
        }else if("morado" == this.value){
            console.log(morado)
        }
    }
}


// mostrar en consola
console.log(jugador1);
console.log(jugador2);
