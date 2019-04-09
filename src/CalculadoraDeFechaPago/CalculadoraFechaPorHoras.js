export default class CalculadoraFechaPorHoras {

    constructor(){
        this.diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    }

    estaDisponibleParaPagar(fecha){  
        let dia = this.obtenerDiaEnBaseALaFecha(fecha);
        return this.esViernes(dia);
    }


    esViernes(dia){  //Esta funcion se repite en dos archivos
        return dia === "Viernes"
    }

    obtenerDiaEnBaseALaFecha(fecha){ //Esta funcion se repite en dos archivos
        return this.diasSemana[fecha.getDay()];
    }
}