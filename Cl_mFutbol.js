export default class Cl_mFutbol{
    constructor(){
        this.contJGan = 0 
        this.contJTotal = 0 
    }
 procesarJuego (j){
        if (j.decision == 1){
            this.contJGan++
        }
        this.contJTotal++
    }
  porcentajeJuegoGan(){
    return ( this.contJGan / this.contJTotal)* 100
  }

}
