let Juego_Terminado = 0
let Ganador = (id) => {
    let Jugador1 = document.getElementById("jugador1")
    let Jugador2 = document.getElementById("jugador2")
    let Caja_1 = document.getElementsByClassName("Caja1")
    let Caja_2 = document.getElementsByClassName("Caja2")
    let Caja_3 = document.getElementsByClassName("Caja3")
    let Caja_4 = document.getElementsByClassName("Caja4")
    let Caja_5 = document.getElementsByClassName("Caja5")
    let Caja_6 = document.getElementsByClassName("Caja6")
    let Caja_7 = document.getElementsByClassName("Caja7")
    let Caja_8 = document.getElementsByClassName("Caja8")
    let Caja_9 = document.getElementsByClassName("Caja9")

    console.log(selector)

    if (Juego_Terminado === 0) {

        if (Caja_1[0].classList.contains("Figura_Circulo") && Caja_2[0].classList.contains("Figura_Circulo") && Caja_3[0].classList.contains("Figura_Circulo")) {
            alert("Ganador Jugador1")
            Juego_Terminado = 1
        } else if (Caja_1[0].classList.contains("Figura_Triangulo") && Caja_2[0].classList.contains("Figura_Triangulo") && Caja_3[0].classList.contains("Figura_Triangulo")) {
            alert("Ganador Jugador2")
            Juego_Terminado = 1
        }

        if (Caja_4[0].classList.contains("Figura_Circulo") && Caja_5[0].classList.contains("Figura_Circulo") && Caja_6[0].classList.contains("Figura_Circulo")) {
            alert("Ganador Jugador1")
            Juego_Terminado = 1
        } else if (Caja_4[0].classList.contains("Figura_Triangulo") && Caja_5[0].classList.contains("Figura_Triangulo") && Caja_6[0].classList.contains("Figura_Triangulo")) {
            alert("Ganador Jugador2")
            Juego_Terminado = 1
        }

        if (Caja_7[0].classList.contains("Figura_Circulo") && Caja_8[0].classList.contains("Figura_Circulo") && Caja_9[0].classList.contains("Figura_Circulo")) {
            alert("Ganador Jugador1")
            Juego_Terminado = 1
        } else if (Caja_7[0].classList.contains("Figura_Triangulo") && Caja_8[0].classList.contains("Figura_Triangulo") && Caja_9[0].classList.contains("Figura_Triangulo")) {
            alert("Ganador Jugador2")
            Juego_Terminado = 1
        }

        if (Caja_1[0].classList.contains("Figura_Circulo") && Caja_5[0].classList.contains("Figura_Circulo") && Caja_9[0].classList.contains("Figura_Circulo")) {
            alert("Ganador Jugador1")
            Juego_Terminado = 1
        } else if (Caja_1[0].classList.contains("Figura_Triangulo") && Caja_5[0].classList.contains("Figura_Triangulo") && Caja_9[0].classList.contains("Figura_Triangulo")) {
            alert("Ganador Jugador2")
            Juego_Terminado = 1
        }

        if (Caja_3[0].classList.contains("Figura_Circulo") && Caja_5[0].classList.contains("Figura_Circulo") && Caja_7[0].classList.contains("Figura_Circulo")) {
            alert("Ganador Jugador1")
            Juego_Terminado = 1
        } else if (Caja_3[0].classList.contains("Figura_Triangulo") && Caja_5[0].classList.contains("Figura_Triangulo") && Caja_7[0].classList.contains("Figura_Triangulo")) {
            alert("Ganador Jugador2")
            Juego_Terminado = 1
        }

        if (Caja_1[0].classList.contains("Figura_Circulo") && Caja_4[0].classList.contains("Figura_Circulo") && Caja_7[0].classList.contains("Figura_Circulo")) {
            alert("Ganador Jugador1")
            Juego_Terminado = 1
        } else if (Caja_1[0].classList.contains("Figura_Triangulo") && Caja_4[0].classList.contains("Figura_Triangulo") && Caja_7[0].classList.contains("Figura_Triangulo")) {
            alert("Ganador Jugador2")
            Juego_Terminado = 1
        }

        if (Caja_2[0].classList.contains("Figura_Circulo") && Caja_5[0].classList.contains("Figura_Circulo") && Caja_8[0].classList.contains("Figura_Circulo")) {
            alert("Ganador Jugador1r")
            Juego_Terminado = 1
        } else if (Caja_2[0].classList.contains("Figura_Triangulo") && Caja_5[0].classList.contains("Figura_Triangulo") && Caja_8[0].classList.contains("Figura_Triangulo")) {
            alert("Ganador Jugador2")
            Juego_Terminado = 1
        }

        if (Caja_3[0].classList.contains("Figura_Circulo") && Caja_6[0].classList.contains("Figura_Circulo") && Caja_9[0].classList.contains("Figura_Circulo")) {
            alert("Ganador Jugador1")
            Juego_Terminado = 1
        } else if (Caja_3[0].classList.contains("Figura_Triangulo") && Caja_6[0].classList.contains("Figura_Triangulo") && Caja_9[0].classList.contains("Figura_Triangulo")) {
            alert("Ganador Jugador2")
            Juego_Terminado = 1
        }
    }
}