// variables
const verde = "#1bd832"
const verdeFondo = "#90ee90"
const naranja = "#ff4500"
const naranjaFondo = "#ff4500"
const morado = "#800080"
const moradoFondo = "#00a86b"
const azul = "#20b2aa"
const azulFondo = "#d19fe8"
/*
// frente
  let colores = document.getElementsByClassName('fondo');
  colores.style.backgroundColor = moradoFondo;
// fondo*/

class Color{
  constructor(color){
      this.color = color
    
  }
  mostrarColor(){
      return `Hola ${this.color}`
  }
}

export default Color
