// variables para pedir nombre de jugadores
let jugador1 = prompt("Ingresa tu nombre jugador 1: ");
let jugador2 = prompt("Ingresa tu nombre jugador 2: ");

  // variable para acceder al DOM de los nombres
  let nombre1 = document.createElement("p");
  nombre1.innerHTML = jugador1;
  document.getElementById("jugador1").appendChild(nombre1);

  let nombre2 = document.createElement("p");
  nombre2.innerHTML = jugador2;
  document.getElementById("jugador2").appendChild(nombre2);
