let selector = 0
let rellenar = (id) => {
    let Reset = document.getElementById("reset")
    let Caja_1 = document.getElementsByClassName("Caja1")
    let Caja_2 = document.getElementsByClassName("Caja2")
    let Caja_3 = document.getElementsByClassName("Caja3")
    let Caja_4 = document.getElementsByClassName("Caja4")
    let Caja_5 = document.getElementsByClassName("Caja5")
    let Caja_6 = document.getElementsByClassName("Caja6")
    let Caja_7 = document.getElementsByClassName("Caja7")
    let Caja_8 = document.getElementsByClassName("Caja8")
    let Caja_9 = document.getElementsByClassName("Caja9")

    Reset.onclick = function () {
        Caja_1[0].className = "Caja1"
        Caja_2[0].className = "Caja2"
        Caja_3[0].className = "Caja3"
        Caja_4[0].className = "Caja4"
        Caja_5[0].className = "Caja5"
        Caja_6[0].className = "Caja6"
        Caja_7[0].className = "Caja7"
        Caja_8[0].className = "Caja8"
        Caja_9[0].className = "Caja9"
        selector = 0
        Juego_Terminado = 0
        document.getElementById("Finish").innerHTML = ""
    }

    let Jugador1 = document.getElementById("jugador1")
    let Jugador2 = document.getElementById("jugador2")

    if (Juego_Terminado === 0) {
        if (selector === 0 && document.getElementById(id).classList.length === 1) {
            document.getElementById(id).classList.add(pl1)
            document.getElementById(id).style.background = colorSeleccionado();
            selector = 1
        } else if (selector === 1 && document.getElementById(id).classList.length === 1) {
            document.getElementById(id).classList.add(pl2)
            document.getElementById(id).style.background = Jugador2.color;//
            selector = 0
        } else {
            alert(`No puedes realizar este movimiento, la caja ${id} esta ocupada`)
        }
    } else if (Juego_Terminado === 1) {
        alert('El juego esta terminado')
    }
}

let seleccion3 = (id, figura, jugador, figuraComparar, jugador2, figCir, figCua, figTri, figEq, idDiv) => {

    if (id == figura && jugador2 != figuraComparar) {
        if (jugador == "pl1") {
            document.getElementById("jugador1").classList.remove(pl1)// se borra la figura que hay en jugador 1
            pl1 = figuraComparar;
            document.getElementById("jugador1").classList.add(pl1)//agrego nueva figura
        } else if (jugador == "pl2") {
            document.getElementById("jugador2").classList.remove(pl2)
            pl2 = figuraComparar;
            document.getElementById("jugador2").classList.add(pl2)
        }

        document.getElementById(figCua).classList.remove("contenedorFigurasClick")
        document.getElementById(figTri).classList.remove("contenedorFigurasClick")
        document.getElementById(figEq).classList.remove("contenedorFigurasClick")
        document.getElementById(figCir).classList.remove("contenedorFigurasClick")
        document.getElementById(idDiv).innerHTML = ""
        document.getElementById(id).classList.add("contenedorFigurasClick")
        
    } else if (id == figura && jugador2 == figuraComparar) {
        document.getElementById(idDiv).innerHTML = `<p class="txterror"> No puedes seleccionar esta figura, elije otra. </p>`
    }
}

let seleccion = (id) => {
    seleccion3(id, "cir", "pl1", "Figura_Circulo", pl2, "cir", "cua", "tri", "eq", "errorFig1")
    seleccion3(id, "cua", "pl1", "Figura_Cuadrado", pl2, "cir", "cua", "tri", "eq", "errorFig1")
    seleccion3(id, "tri", "pl1", "Figura_Triangulo", pl2, "cir", "cua", "tri", "eq", "errorFig1")
    seleccion3(id, "eq", "pl1", "Figura_X", pl2, "cir", "cua", "tri", "eq", "errorFig1")
};

let seleccion2 = (id) => {
    seleccion3(id, "cir2", "pl2", "Figura_Circulo", pl1, "cir2", "cua2", "tri2", "eq2", "errorFig2")
    seleccion3(id, "cua2", "pl2", "Figura_Cuadrado", pl1, "cir2", "cua2", "tri2", "eq2", "errorFig2")
    seleccion3(id, "tri2", "pl2", "Figura_Triangulo", pl1, "cir2", "cua2", "tri2", "eq2", "errorFig2")
    seleccion3(id, "eq2", "pl2", "Figura_X", pl1, "cir2", "cua2", "tri2", "eq2", "errorFig2")
};
let pl1
let pl2