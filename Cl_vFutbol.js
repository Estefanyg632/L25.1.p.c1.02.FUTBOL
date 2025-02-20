export default class Cl_vFutbol {
    constructor(controlador) {
      this.vista = document.getElementById("mainForm");
      this.btAgregar = document.getElementById("mainForm_btAgregar");
      this.lblJuegosGanados = document.getElementById("mainForm_lblJuegosGanados");
     
  
      this.btAgregar.onclick = () => controlador.mostrarVistaJuego();
      
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
  
    reportarJuego({
   
      JuegosGanados,

    }) {
     
      this.lblJuegosGanados.innerHTML = JuegosGanados;
     
    }
  }