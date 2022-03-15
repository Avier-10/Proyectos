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
    if(id == "cir" && pl2 != "Figura_Circulo" ){
        pl1 = "Figura_Circulo" 
        document.getElementById(id).classList.add ("contenedorFigurasClick")
        document.getElementById("cua").classList.remove ("contenedorFigurasClick")
        document.getElementById("tri").classList.remove ("contenedorFigurasClick")
        document.getElementById("eq").classList.remove ("contenedorFigurasClick")
    } else if(id == "cir" && pl2 == "Figura_Circulo" ){
        alert("Selecciona otra figura!")
    }
    if(id == "cua" && pl2 != "Figura_Cuadrado" ){
        pl1 = "Figura_Cuadrado" 
        document.getElementById(id).classList.add ("contenedorFigurasClick")
        document.getElementById("cir").classList.remove ("contenedorFigurasClick")
        document.getElementById("tri").classList.remove ("contenedorFigurasClick")
        document.getElementById("eq").classList.remove ("contenedorFigurasClick")
    }else if(id == "cua" && pl2 == "Figura_Cuadrado" ){
        alert("Selecciona otra figura!")
    }
    if(id == "tri"  && pl2 != "Figura_Triangulo"){
        pl1 = "Figura_Triangulo" 
        document.getElementById(id).classList.add ("contenedorFigurasClick")
        document.getElementById("cua").classList.remove ("contenedorFigurasClick")
        document.getElementById("cir").classList.remove ("contenedorFigurasClick")
        document.getElementById("eq").classList.remove ("contenedorFigurasClick")
    }else if(id == "tri"  && pl2 == "Figura_Triangulo"){
        alert("Selecciona otra figura!")
    }
    if(id == "eq"  && pl2 != "Figura_X"){
        pl1 = "Figura_X" 
        document.getElementById(id).classList.add ("contenedorFigurasClick")
        document.getElementById("cua").classList.remove ("contenedorFigurasClick")
        document.getElementById("tri").classList.remove ("contenedorFigurasClick")
        document.getElementById("cir").classList.remove ("contenedorFigurasClick")
    } else if(id == "eq"  && pl2 == "Figura_X"){
        alert("Selecciona otra figura!")
    }
    
};

let seleccion2 = (id) => {
    if(id == "cir2" && pl1 != "Figura_Circulo"){
        pl2 = "Figura_Circulo" 
        document.getElementById(id).classList.add ("contenedorFigurasClick")
        document.getElementById("cua2").classList.remove ("contenedorFigurasClick")
        document.getElementById("tri2").classList.remove ("contenedorFigurasClick")
        document.getElementById("eq2").classList.remove ("contenedorFigurasClick")
    }else if(id == "cir2" && pl1 == "Figura_Circulo" ){
        alert("Selecciona otra figura!")
    }
    if(id == "cua2" && pl1 != "Figura_Cuadrado"){
        pl2 = "Figura_Cuadrado" 
        document.getElementById(id).classList.add ("contenedorFigurasClick")
        document.getElementById("cir2").classList.remove ("contenedorFigurasClick")
        document.getElementById("tri2").classList.remove ("contenedorFigurasClick")
        document.getElementById("eq2").classList.remove ("contenedorFigurasClick")
    }else if(id == "cua2" && pl1 == "Figura_Cuadrado" ){
        alert("Selecciona otra figura!")
    }
    if(id == "tri2" && pl1 != "Figura_Triangulo"){
        pl2 = "Figura_Triangulo" 
        document.getElementById(id).classList.add ("contenedorFigurasClick")
        document.getElementById("cua2").classList.remove ("contenedorFigurasClick")
        document.getElementById("cir2").classList.remove ("contenedorFigurasClick")
        document.getElementById("eq2").classList.remove ("contenedorFigurasClick")
    }else if(id == "tri2"  && pl1 == "Figura_Triangulo"){
        alert("Selecciona otra figura!")
    }
    if(id == "eq2" && pl1 != "Figura_X"){
        pl2 = "Figura_X" 
        document.getElementById(id).classList.add ("contenedorFigurasClick")
        document.getElementById("cua2").classList.remove ("contenedorFigurasClick")
        document.getElementById("tri2").classList.remove ("contenedorFigurasClick")
        document.getElementById("cir2").classList.remove ("contenedorFigurasClick")
    }else if(id == "eq2"  && pl1 == "Figura_X"){
        alert("Selecciona otra figura!")
    }
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
