import Cl_mFutbol from "./Cl_mFutbol.js";
import Cl_vFutbol from "./Cl_vFutbol.js";
import Cl_mJuego from "./Cl_mJuego.js";
import Cl_vJuego from "./Cl_vJuego.js";
export default class Cl_controlador {
  constructor() {
    this.Cl_mFutbol = new Cl_mFutbol();
    this.Cl_vFutbol = new Cl_vFutbol(this);
    this.Cl_vJuego = new Cl_vJuego(this);
  }
  mostrarVistaJuego() {
    this.Cl_vFutbol.ocultar();
    this.Cl_vJuego.mostrar();
  }
  mostrarVistaFutbol() {
    this.Cl_vJuego.ocultar();
    this.Cl_vFutbol.mostrar();
  }

  

  agregarJuego({decision}) {
    let partido = new Cl_mJuego({ decision});
    this.Cl_mFutbol.procesarJuego(partido);
    this.Cl_vFutbol.reportarJuego({
     JuegosGanados: this.Cl_mFutbol.porcentajeJuegoGan()
    });
    this.mostrarVistaFutbol();
  }
}


