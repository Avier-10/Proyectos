let tablero = document.getElementsByClassName("Tablero");
let BotonReset = document.getElementById("Reset");
let idCaja1 = document.getElementById("1");
let idCaja2 = document.getElementById("2");
let idCaja3 = document.getElementById("3");
let idCaja4 = document.getElementById("4");
let idCaja5 = document.getElementById("5");
let idCaja6 = document.getElementById("6");
let idCaja7 = document.getElementById("7");
let idCaja8 = document.getElementById("8");
let idCaja9 = document.getElementById("9");


let Selector = 0;

let rellenar = (id)=>{
    id.innerHTML = "holi"
    
}

const cajas = []

cajas.push(idCaja1, idCaja2, idCaja3, idCaja4, idCaja5, idCaja6, idCaja7, idCaja8, idCaja9);

console.log(cajas)



/*
let tablero = document.getElementsByClassName("Tablero");
//let Tablerazo = document.getElementById("TT")
let BotonReset = document.getElementById("Reset");
let idCaja1 = document.getElementById("1");
let idCaja2 = document.getElementById("2");
let idCaja3 = document.getElementById("3");
let idCaja4 = document.getElementById("4");
let idCaja5 = document.getElementById("5");
let idCaja6 = document.getElementById("6");
let idCaja7 = document.getElementById("7");
let idCaja8 = document.getElementById("8");
let idCaja9 = document.getElementById("9");
let Caja_1 = document.getElementsByClassName("Caja1");
let Caja_2 = document.getElementsByClassName("Caja2");
let Caja_3 = document.getElementsByClassName("Caja3");
let Caja_4 = document.getElementsByClassName("Caja4");
let Caja_5 = document.getElementsByClassName("Caja5");
let Caja_6 = document.getElementsByClassName("Caja6");
let Caja_7 = document.getElementsByClassName("Caja7");
let Caja_8 = document.getElementsByClassName("Caja8");
let Caja_9 = document.getElementsByClassName("Caja9");


IDCaja1.onclick = function () {
  if (
    Selector == 0 &&
    Caja_1[0].classList.length === 1 &&
    IDCaja1.classList.length === 1
  ) {
    Caja_1[0].className = "Caja1 Figura_X";
    Selector = 1;
  } else if (
    Selector == 1 &&
    Caja_1[0].classList.length === 1 &&
    IDCaja1.classList.length === 1
  ) {
    Caja_1[0].className = "Caja1 Figura_Circulo ";
    Selector = 0;
  }
};

IDCaja2.onclick = function () {
  if (
    Selector == 0 &&
    Caja_2[0].classList.length === 1 &&
    IDCaja2.classList.length === 1
  ) {
    Caja_2[0].className = "Caja2 Figura_X";
    Selector = 1;
  } else if (
    Selector == 1 &&
    Caja_2[0].classList.length === 1 &&
    IDCaja2.classList.length === 1
  ) {
    Caja_2[0].className = "Caja2 Figura_Circulo ";
    Selector = 0;
  }
};
IDCaja3.onclick = function () {
  if (
    Selector == 0 &&
    Caja_3[0].classList.length === 1 &&
    IDCaja3.classList.length === 1
  ) {
    Caja_3[0].className = "Caja3 Figura_X";
    Selector = 1;
  } else if (
    Selector == 1 &&
    Caja_3[0].classList.length === 1 &&
    IDCaja3.classList.length === 1
  ) {
    Caja_3[0].className = "Caja3 Figura_Circulo ";
    Selector = 0;
  }
};
IDCaja4.onclick = function () {
  if (
    Selector == 0 &&
    Caja_4[0].classList.length === 1 &&
    IDCaja4.classList.length === 1
  ) {
    Caja_4[0].className = "Caja4 Figura_X";
    Selector = 1;
  } else if (
    Selector == 1 &&
    Caja_4[0].classList.length === 1 &&
    IDCaja4.classList.length === 1
  ) {
    Caja_4[0].className = "Caja4 Figura_Circulo ";
    Selector = 0;
  }
};
IDCaja5.onclick = function () {
  if (Selector == 0 && Caja_5[0].classList.length === 1 && IDCaja5.classList.length === 1) {
    Caja_5[0].className = "Caja5 Figura_X";
    Selector = 1;
  } else if (Selector == 1 &&Caja_5[0].classList.length === 1 &&IDCaja5.classList.length === 1) {
    Caja_5[0].className = "Caja5 Figura_Circulo ";
    Selector = 0;
  }
};

IDCaja6.onclick = function () {
  if (
    Selector == 0 &&
    Caja_6[0].classList.length === 1 &&
    IDCaja6.classList.length === 1
  ) {
    Caja_6[0].className = "Caja6 Figura_X";
    Selector = 1;
  } else if (
    Selector == 1 &&
    Caja_6[0].classList.length === 1 &&
    IDCaja6.classList.length === 1
  ) {
    Caja_6[0].className = "Caja6 Figura_Circulo ";
    Selector = 0;
  }
};
IDCaja7.onclick = function () {
  if (
    Selector == 0 &&
    Caja_7[0].classList.length === 1 &&
    IDCaja7.classList.length === 1
  ) {
    Caja_7[0].className = "Caja7 Figura_X";
    Selector = 1;
  } else if (
    Selector == 1 &&
    Caja_7[0].classList.length === 1 &&
    IDCaja7.classList.length === 1
  ) {
    Caja_7[0].className = "Caja7 Figura_Circulo ";
    Selector = 0;
  }
};
IDCaja8.onclick = function () {
  if (
    Selector == 0 &&
    Caja_8[0].classList.length === 1 &&
    IDCaja8.classList.length === 1
  ) {
    Caja_8[0].className = "Caja8 Figura_X";
    Selector = 1;
  } else if (
    Selector == 1 &&
    Caja_8[0].classList.length === 1 &&
    IDCaja8.classList.length === 1
  ) {
    Caja_8[0].className = "Caja8 Figura_Circulo ";
    Selector = 0;
  }
};
IDCaja9.onclick = function () {
  if (
    Selector == 0 &&
    Caja_9[0].classList.length === 1 &&
    IDCaja9.classList.length === 1
  ) {
    Caja_9[0].className = "Caja9 Figura_X";
    Selector = 1;
  } else if (
    Selector == 1 &&
    Caja_9[0].classList.length === 1 &&
    IDCaja9.classList.length === 1
  ) {
    Caja_9[0].className = "Caja9 Figura_Circulo ";
    Selector = 0;
  }
};

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