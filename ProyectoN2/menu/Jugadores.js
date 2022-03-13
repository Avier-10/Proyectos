/* // variables se van a usar cuando se una al tablero
const verde = "#1bd832"
const verdeFondo = "#90ee90"
const naranja = "#ff4500"
const naranjaFondo = "#ff4500"
const morado = "#800080"
const moradoFondo = "#00a86b"
const azul = "#20b2aa"
const azulFondo = "#d19fe8"*/

class Jugadores{
    constructor(nombre, color){
        this.nombre = nombre
        this.color = color
    }
    mostrarNombre(){
        return `Hola ${this.nombre}`
    }
    mostrarColor(){
        // variables
        const verde = "#1bd832"
        const naranja = "#ff4500"
        const morado = "#800080"
        const azul = "#20b2aa"
        switch (this.color) {
            case "verde":
                return verde
                break;
            case "naranja":
                return naranja
                break;
            case "morado":
                return morado
                break;
            case "azul":
                return azul
                break;
            }
        }
    }

export default Jugadores
