// variables
let nombre1 = prompt("Ingresa tu nombre jugador 1: ");
let nombre2 = prompt("Ingresa tu nombre jugador 2: ");
let colorJugador1
let colorJugador2
const color = ["verde", "naranja", "morado", "azul"];
const color2 = ["verde", "naranja", "morado", "azul"];

while(nombre1 == "" ){
    nombre1 = prompt("Ingresa tu nombre jugador 1: ");
}

while(nombre2 == "" ){
    nombre2 = prompt("Ingresa tu nombre jugador 2: ");
}

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

// color jugador 1
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
    const verde = "#1bd832"
    const naranja = "#ff4500"
    const morado = "#800080"
    const azul = "#20b2aa"
    if (this.checked) {
        if("azul" === this.value){
            colorJugador1 = azul
        }else if("verde" === this.value){
            colorJugador1 = verde
        }else if("naranja" === this.value){
            colorJugador1 = naranja
        }else if("morado" == this.value){
            colorJugador1 = morado
        }
    }
    return colorJugador1
}

// color jugador 2
const colores2 = document.querySelector("#radioColores2");
colores2.innerHTML = color2.map((colores2) => 
    `<div>
      <input type="radio" name="colores2" value="${colores2}" id="${colores2}">
      <label for="${colores2}">${colores2}</label>
    </div>`).join(' ');

const radioButtons2 = document.querySelectorAll('input[name="colores2"]');
for(const radioButton2 of radioButtons2){
    radioButton2.addEventListener('change', colorSeleccionado2);
} 

function colorSeleccionado2(colorJugador1) {
    const verde = "#1bd832"
    const naranja = "#ff4500"
    const morado = "#800080"
    const azul = "#20b2aa"
  
    if (this.checked) {
        if("azul" === this.value){
            colorJugador2 = azul
        }else if("verde" === this.value){
            colorJugador2 = verde
        }else if("naranja" === this.value){
            colorJugador2 = naranja
        }else if("morado" == this.value){
            colorJugador2 = morado
        }
    }
    return colorJugador1
}