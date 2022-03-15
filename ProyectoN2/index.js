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

let selector = 0;

let seleccion3 = (id, figura, jugador, figuraComparar, jugador2, figCir, figCua, figTri, figEq, idDiv) => {
    
    if(id == figura && jugador2 != figuraComparar ){
        if(jugador == "pl1"){
            pl1 = figuraComparar ;
        }else if(jugador == "pl2"){
            pl2 = figuraComparar ;
        }
        
        document.getElementById(figCua).classList.remove ("contenedorFigurasClick")
        document.getElementById(figTri).classList.remove ("contenedorFigurasClick")
        document.getElementById(figEq).classList.remove ("contenedorFigurasClick")
        document.getElementById(figCir).classList.remove ("contenedorFigurasClick")
        
        document.getElementById(idDiv).innerHTML = ""
        document.getElementById(id).classList.add ("contenedorFigurasClick")
    } else if(id == figura && jugador2 == figuraComparar ){
        document.getElementById(idDiv).innerHTML = `No puedes seleccionar esta figura, elije otra.`
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

let pl2;


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
