export default class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
        this.contadorDeViernes = 0;
    }

    esEmpleadoFijo(salarioFijo){
        this.tipo         = 'fijo';
        this.salarioFijo  = salarioFijo;
    }

    esEmpleadoPorHora(hojaDeTiempo){
        this.tipo         = 'porHora';
        this.hojaDeTiempo = hojaDeTiempo;
    }

    esEmpleadoPorComision(hojaDeVenta,salarioFijo){   
        this.tipo        = 'comision';
        this.salarioFijo = salarioFijo;
        this.hojaDeVenta = hojaDeVenta;
    }

}