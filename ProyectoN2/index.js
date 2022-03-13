let rellenar = (id)=>{
    if(selector === 0 && document.getElementById(id).classList.length === 1){
        document.getElementById(id).classList.add (jugador1.figura)
        selector = 1
        jugador2.turno()
    }else if (selector === 1 && document.getElementById(id).classList.length === 1 ){
        document.getElementById(id).classList.add (jugador2.figura)
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
    if (id == "cir") {
        return pl1 = "Figura_Circulo";
    } else if (id == "cua") {
        return (pl1 = "Figura_Cuadrado");
    } else if (id == "tri") {
        return (pl1 = "Figura_Triangulo");
    } else if (id == "eq") {
        return (pl1 = "Figura_X");
    } else {
        return;
    }
};

let seleccion2 = (id) => {
    if (id == "cir2") {
        return (pl2 = "Figura_Circulo");
    } else if (id == "cua2") {
        return (pl2 = "Figura_Cuadrado");
    } else if (id == "tri2") {
        return (pl2 = "Figura_Triangulo");
    } else if (id == "eq2") {
        return (pl2 = "Figura_X");
    } else {
        return;
    }
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
