export default class CalculadoraFechaPorComision {
    static estaDisponibleParaPagar(fecha, empleado){
        let estaDisponible = false;
        let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
        let diaEnLetras = diasSemana[fecha.getDay()];
        if(diaEnLetras === "Viernes"){
            if(empleado.contadorDeViernes === 0 || empleado.contadorDeViernes === 2)
                estaDisponible = true;
        }   
        if(empleado.contadorDeViernes == 3)
            empleado.contadorDeViernes == 0;
        else
            empleado.contadorDeViernes += 1;
        return estaDisponible;
    }
}