  // variable para acceder al DOM de los nombres
  /*let nombre1 = document.createElement("p");
  nombre1.innerHTML = player1;
  document.getElementById("jugador1").appendChild(nombre1);

  let nombre2 = document.createElement("p");
  nombre2.innerHTML = player2;
  document.getElementById("jugador2").appendChild(nombre2);*/


  class Nombre{
      constructor(nombre){
          this.nombre = nombre
        
      }
      mostrarNombre(){
          return `Hola ${this.nombre}`
      }
  }

export default Nombre
