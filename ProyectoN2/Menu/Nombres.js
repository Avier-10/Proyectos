// variables para pedir nombre de jugadores
let player1 = prompt("Ingresa tu nombre jugador 1: ");
let player2 = prompt("Ingresa tu nombre jugador 2: ");

  // variable para acceder al DOM de los nombres
  let nombre1 = document.createElement("p");
  nombre1.innerHTML = player1;
  document.getElementById("jugador1").appendChild(nombre1);

  let nombre2 = document.createElement("p");
  nombre2.innerHTML = player2;
  document.getElementById("jugador2").appendChild(nombre2);
