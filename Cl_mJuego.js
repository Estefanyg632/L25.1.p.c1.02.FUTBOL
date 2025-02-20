export default class Cl_mJuego{
    constructor(decision){
        this._decision = decision
    }
    set decision(d){
        this._decision = +d
    }
    get decision(){
        return this._decision
    }
}