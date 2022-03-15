let selector = 0
let rellenar = (id) => {
    let Reset = document.getElementById("reset")
    var Caja_1 = document.getElementsByClassName("Caja1")
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
    }

    let Jugador1 = document.getElementById("jugador1")
    let Jugador2 = document.getElementById("jugador2")

    if (selector === 0 && document.getElementById(id).classList.length === 1) {
        document.getElementById(id).classList.add(Jugador1.className)
        selector = 1
    } else if (selector === 1 && document.getElementById(id).classList.length === 1) {
        document.getElementById(id).classList.add(Jugador2.className)
        selector = 0
    } else {
        alert(`No puedes realizar este movimiento, la caja ${id} esta ocupada`)
    }

    if (Juego_Terminado === 1){
            
    }
}