export default class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
        this.contadorDeViernes = 0;
    }

    esEmpleadoFijo(salarioFijo){
        this.tipo         = 'fijo';
        this.salarioFijo  = salarioFijo;
    }

    esEmpleadoPorHora(RegistroDeTiempo){
        this.tipo             = 'porHora';
        this.RegistroDeTiempo = RegistroDeTiempo;
    }

    esEmpleadoPorComision(RegistroDeVenta,salarioFijo){   
        this.tipo            = 'comision';
        this.salarioFijo     = salarioFijo;
        this.RegistroDeVenta = RegistroDeVenta;
    }

}