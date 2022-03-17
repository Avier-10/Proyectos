class Jugadores{
    constructor(nombre,color, figura){
        this.nombre = nombre
        this.figura = figura
        this.color = color
    }
    mostrarNombre(){
        return `Bienvenid@ <b>${this.nombre}</b>`
    }

}

