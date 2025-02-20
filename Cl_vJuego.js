export default class Cl_vFamilia {
    constructor(controlador) {
      this.vista = document.getElementById("JuegoForm");
      this.inPartido = document.getElementById("JuegoForm_inPartido");
      this.btAceptar = document.getElementById("CalcularForm_btAceptar");
      this.btsiguientepartida = document.getElementById("SiguientePartidaForm_btAceptar")
    
      this.btAceptar.onclick = () =>
        controlador.agregarFamilia({
          nombre: this.inNombre.value,
          personas: this.inPersonas.value,
          dia: this.inDia.value,
          horario: this.inHorario.value,
        });
      this.ocultar();
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
  }