import CalculadoraPorComision from './CalculadoraDeSalario/CalculadoraPorComision.js';
import CalculadoraPorHoras from './CalculadoraDeSalario/CalculadoraPorHoras.js';
import CalculadoraFija from './CalculadoraDeSalario/CalculadoraFija.js';
import HojaDeTiempo from './Hojas/hojaDeTiempo.js';
import HojaDeVenta from './Hojas/hojaDeVenta.js';

export default class Empleado {
    constructor(nombre, tipo, salarioFijo, hojaDeTiempo, hojaDeVenta) {
        this.nombre        = nombre;
        this.tipo          = tipo;
        this.hojaDeTiempo  = hojaDeTiempo;
        this.hojaDeVenta   = hojaDeVenta;
        this.salarioFijo   = salarioFijo;
        this.tipoDeSalario = this.crearCalculadoraDeSalario();
        this.salario       = this.actualizarSalario(this);
    }

    crearCalculadoraDeSalario(){
        switch(this.tipo){
            case 'fijo':
                return CalculadoraFija;
            case 'comision':
                return CalculadoraPorComision;
            case 'porHora':
                return CalculadoraPorHoras;
        }
    }


    actualizarSalario(){
        return this.salario = this.crearCalculadoraDeSalario().calcular(this);
    }



    cambiarAEmpleadofijo(salarioFijo){
        this.tipo = 'fijo';
        this.hojaDeVenta = HojaDeVenta.CrearHojaVacia();
        this.hojaDeTiempo = hojaDeTiempo.CrearHojaVacia();
        this.salarioFijo = salarioFijo;
        this.actualizarSalario();
    }

    cambiarAEmpleadoPorHora(hojaDeTiempo){
        this.tipo = 'porHora';
        this.salarioFijo = 0;
        this.hojaDeVenta = HojaDeVenta.CrearHojaVacia();
        this.hojaDeTiempo = hojaDeTiempo;
        this.actualizarSalario();
    }

    cambiarAEmpleadoPorComision(hojaDeVenta){   
        this.tipo = 'comision';
        this.hojaDeVenta = hojaDeVenta;
        this.hojaDeTiempo = HojaDeTiempo.CrearHojaVacia();
        this.actualizarSalario();
    }

}