   /* // variables
    const verde = "#1bd832"
    const verdeFondo = "#90ee90"
    const naranja = "#ff4500"
    const naranjaFondo = "#ff4500"
    const morado = "#800080"
    const moradoFondo = "#00a86b"
    const azul = "#20b2aa"
    const azulFondo = "#d19fe8"*/

class Color{
  constructor(color){
    this.color = color
    
  }
  mostrarColor(){
     // variables
    const verde = "#1bd832"
    const naranja = "#ff4500"
    const morado = "#800080"
    const azul = "#20b2aa"

    switch (this.color) {
      case "verde":
       return verde
        break;
      case "naranja":
        return naranja
        break;
      case "morado":
        return morado
        break;
      case "azul":
        return azul
        break;
    }
  }
}

export default Color
