let rellenar = (id)=>{
    if(selector === 0 && document.getElementById(id).classList.length === 1){
        document.getElementById(id).classList.add (jugador1.figura)
        document.getElementById(id).style.background = jugador1.color;
        selector = 1
        jugador2.turno()
    }else if (selector === 1 && document.getElementById(id).classList.length === 1 ){
        document.getElementById(id).classList.add (jugador2.figura)
        document.getElementById(id).style.background = jugador2.color;
        selector = 0
        jugador1.turno()
    }else{
        alert(`No puedes realizar este movimiento, la caja ${id} esta ocupada`)
    }
}


let BotonReset = document.getElementById("Reset");

const ganador = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];

let selector = 0;

let seleccion = (id) => {
    id == "cir" ?  pl1 = "Figura_Circulo" : "";
    id == "cua" ? pl1 = "Figura_Cuadrado" : "";
    id == "tri" ? pl1 = "Figura_Triangulo" : "";
    id == "eq" ?  pl1 = "Figura_X" : "";
};

let seleccion2 = (id) => {
    id == "cir" ?  pl2 = "Figura_Circulo" : "";
    id == "cua" ? pl2 = "Figura_Cuadrado" : "";
    id == "tri" ? pl2 = "Figura_Triangulo" : "";
    id == "eq" ?  pl2 = "Figura_X" : "";
};


/*
BotonReset.onclick = function () {
  Caja_1[0].className = "Caja1";
  Caja_2[0].className = "Caja2";
  Caja_3[0].className = "Caja3";
  Caja_4[0].className = "Caja4";
  Caja_5[0].className = "Caja5";
  Caja_6[0].className = "Caja6";
  Caja_7[0].className = "Caja7";
  Caja_8[0].className = "Caja8";
  Caja_9[0].className = "Caja9";
  console.log(Selector);
};
*/
