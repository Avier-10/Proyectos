let txt = document.getElementById("info");

class Jugador{
    constructor(nombre, color, figura){
        this.nombre = nombre,
        this.color = color,
        this.figura = figura
    }
    
    saludar(){
        if(this.nombre.split("")[this.nombre.length - 1] === "a"){
            txt.innerHTML =  `Bienvenida ${this.nombre}, ahora empieza el juego!`
        }else{
            txt.innerHTML =  `Bienvenido ${this.nombre}, ahora empieza el juego!`
        }
    }
    turno(){
        txt.innerHTML = `Es el turno de ${this.nombre}`
    }

    piezas(){
        txt.innerHTML =  `Estas usando ${this.figura}, en color ${this.color}. Buena suerte!`
    }
}

const jugador1 = new Jugador()
const jugador2 = new Jugador()