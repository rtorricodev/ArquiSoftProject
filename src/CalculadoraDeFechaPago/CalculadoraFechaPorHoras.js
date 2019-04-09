export default class CalculadoraFechaPorHoras {
    static estaDisponibleParaPagar(fecha){  
        let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
        let diaEnLetras = diasSemana[fecha.getDay()];
        return diaEnLetras === 'Viernes';
    }
}