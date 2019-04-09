export default class CalculadoraFechaPorHoras {
    static estaDisponibleParaPagar(fecha){  
        var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
        var diaEnLetras = diasSemana[fecha.getDay()];
        return diaEnLetras === 'Viernes';
    }
}