let Empleado = require('../Entidades/Empleado/Empleado.js');

let CalculadoraFija = require('../Entidades/Empleado/CalculadoraSalario/CalculadoraFija.js');
let CalculadoraFechaFija = require('../Entidades/Empleado/CalculadoraFechaPago/CalculadoraFechaFija.js');

let CalculadoraPorHoras = require('../Entidades/Empleado/CalculadoraSalario/CalculadoraPorHoras.js');
let RegistroDeTiempo = require('../Entidades/RegistroDeTiempo.js');
let CalculadoraFechaPorHora = require('../Entidades/Empleado/CalculadoraFechaPago/CalculadoraFechaPorHoras.js');


let CalculadoraPorComision = require('../Entidades/Empleado/CalculadoraSalario/CalculadoraPorComision.js');
let RegistroDeVenta = require('../Entidades/RegistroDeVenta.js');
let CalculadoraFechaPorComision = require('../Entidades/Empleado/CalculadoraFechaPago/CalculadoraFechaPorComision.js');

class FábricaEmpleado {

    constructor(){    
    }

    fabricarEmpleadoFijo(nombre,apellido,celularPrincipal,correoPrincipal,salarioFijo, fechaInicioDeTrabajo){
        let calculadoraSalarioFijo = new CalculadoraFija(salarioFijo,fechaInicioDeTrabajo);
        let calculadoraFechaPagoFijo = new CalculadoraFechaFija();

        return new Empleado(nombre,apellido,celularPrincipal,correoPrincipal,calculadoraSalarioFijo,calculadoraFechaPagoFijo)
    }

    fabricarEmpleadoPorHora(nombre,apellido,celularPrincipal,correoPrincipal,tarifa,horasManuales,horasATrabajar){
        let registroDeTiempo = new RegistroDeTiempo(tarifa,horasManuales,horasATrabajar);
        let calculadoraSalarioPorHora = new CalculadoraPorHoras(registroDeTiempo);
        let calculadoraFechaPorHora = new CalculadoraFechaPorHora();
        return new Empleado(nombre,apellido,celularPrincipal,correoPrincipal,calculadoraSalarioPorHora,calculadoraFechaPorHora);
    }

    fabricarEmpleadoPorComision(nombre,apellido,celularPrincipal,correoPrincipal,salarioFijo,comision,ventasTotales){
        let registroDeVenta = new RegistroDeVenta(comision,ventasTotales);
        let calculadoraPorComision = new CalculadoraPorComision(salarioFijo,registroDeVenta);
        let calculadoraFechaPorComision = new CalculadoraFechaPorComision();
        return new Empleado(nombre,apellido,celularPrincipal,correoPrincipal,calculadoraPorComision,calculadoraFechaPorComision);
    }



    



}

module.exports = EmpleadoFijo;