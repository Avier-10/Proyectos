let rellenar = (id)=>{
    if(selector === 0 && document.getElementById(id).innerHTML.length === 0){
        jugador1.turno()
        document.getElementById(id).innerHTML = jugador1.figura
        selector = 1
    }else if (selector === 1 && document.getElementById(id).innerHTML.length === 0){
        jugador2.turno()
        document.getElementById(id).innerHTML = jugador2.figura
        selector = 0
    }else{
        alert(`No puedes realizar este movimiento, la caja ${id} esta ocupada`)
    }
}


let BotonReset = document.getElementById("Reset");

const ganador = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];

let selector = 0;





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