export default class CalculadoraFechaPorHoras {

    constructor(){
    }

    estaDisponibleParaPagar(fecha){  
        return fecha.esViernes();
    }

}