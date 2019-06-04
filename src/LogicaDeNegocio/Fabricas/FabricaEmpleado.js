let Empleado = require('../Entidades/Empleado/Empleado.js');

let CalculadoraFija = require('../Entidades/Empleado/CalculadoraSalario/CalculadoraFija.js');
let CalculadoraFechaFija = require('../Entidades/Empleado/CalculadoraFechaPago/CalculadoraFechaFija.js');

let CalculadoraPorHoras = require('../Entidades/Empleado/CalculadoraSalario/CalculadoraPorHoras.js');
let RegistroDeTiempo = require('../Entidades/RegistroDeTiempo.js');
let CalculadoraFechaPorHora = require('../Entidades/Empleado/CalculadoraFechaPago/CalculadoraFechaPorHoras.js');


let CalculadoraPorComision = require('../Entidades/Empleado/CalculadoraSalario/CalculadoraPorComision.js');
let RegistroDeVenta = require('../Entidades/RegistroDeVenta.js');
let CalculadoraFechaPorComision = require('../Entidades/Empleado/CalculadoraFechaPago/CalculadoraFechaPorComision.js');

let Fecha = require('../Entidades/Fecha.js');

class FabricaEmpleado {

    constructor(){    
    }

    desglosar(empleado){
        var data = {};
        data.nombre = empleado.nombre;
        data.apellido = empleado.apellido;
        data.celularPrincipal = empleado.celularPrincipal;
        data.correoPrincipal = empleado.correoPrincipal;
        data.tipo = empleado.tipo;
        if(data.tipo == 'Fijo'){
            data.monto = empleado.calculadoraSalario.salarioFijo;
            data.dia = empleado.calculadoraSalario.fechaInicioDeTrabajo.dia;
            data.mes = empleado.calculadoraSalario.fechaInicioDeTrabajo.mes;
            data.anho = empleado.calculadoraSalario.fechaInicioDeTrabajo.anho;
        }
        if(data.tipo == 'Por hora'){
            data.tarifa = empleado.calculadoraSalario.registroDeTiempo.tarifa;
            data.horasManuales = empleado.calculadoraSalario.registroDeTiempo.horasTotalesTrabajadasManuales;
            data.horasATrabajar = empleado.calculadoraSalario.registroDeTiempo.horasATrabajarPorDia;
        }
        if(data.tipo == 'Por comisión'){
            data.monto = empleado.calculadoraSalario.salarioFijo;
            data.comision = empleado.calculadoraSalario.RegistroDeVenta.comision;
            data.ventasTotales = empleado.calculadoraSalario.RegistroDeVenta.ventasTotales;
        }
        return data;
    }

    crearEmpleado(datos){

        console.log(datos);
        switch(datos.tipo){
            case 'Fijo':
                return this.fabricarEmpleadoFijo(datos.nombre,datos.apellido,datos.celularPrincipal,
                    datos.correoPrincipal,datos.monto,datos.dia,datos.mes,datos.anho);
            case 'Por hora':
                return this.fabricarEmpleadoPorHora(datos.nombre,datos.apellido,datos.celularPrincipal,
                    datos.correoPrincipal,datos.tarifa,datos.horasManuales,datos.horasATrabajar);
            case 'Por comisión':
                return this.fabricarEmpleadoPorComision(datos.nombre,datos.apellido,datos.celularPrincipal,
                    datos.correoPrincipal,datos.monto,datos.comision,datos.ventasTotales)

        }
    }

    fabricarEmpleadoFijo(nombre,apellido,celularPrincipal,correoPrincipal,salarioFijo, dia, mes, anho){
        let fechaInicioTrabajo = new Fecha(dia,mes,anho);
        let calculadoraSalarioFijo = new CalculadoraFija(salarioFijo,fechaInicioTrabajo);
        let calculadoraFechaPagoFijo = new CalculadoraFechaFija();
        let empleado = new Empleado(nombre,apellido,celularPrincipal,correoPrincipal,calculadoraSalarioFijo,calculadoraFechaPagoFijo);
        empleado.tipo = 'Fijo';
        return empleado;
    }

    fabricarEmpleadoPorHora(nombre,apellido,celularPrincipal,correoPrincipal,tarifa,horasManuales,horasATrabajar){
        let registroDeTiempo = new RegistroDeTiempo(tarifa,horasManuales,horasATrabajar);
        let calculadoraSalarioPorHora = new CalculadoraPorHoras(registroDeTiempo);
        let calculadoraFechaPorHora = new CalculadoraFechaPorHora();
        let empleado = new Empleado(nombre,apellido,celularPrincipal,correoPrincipal,calculadoraSalarioPorHora,calculadoraFechaPorHora);
        empleado.tipo = 'Por hora';
        return empleado;
    }

    fabricarEmpleadoPorComision(nombre,apellido,celularPrincipal,correoPrincipal,salarioFijo,comision,ventasTotales){
        let registroDeVenta = new RegistroDeVenta(comision,ventasTotales);
        let calculadoraPorComision = new CalculadoraPorComision(salarioFijo,registroDeVenta);
        let calculadoraFechaPorComision = new CalculadoraFechaPorComision();
        let empleado = new Empleado(nombre,apellido,celularPrincipal,correoPrincipal,calculadoraPorComision,calculadoraFechaPorComision);
        empleado.tipo = 'Por comisión';
        return empleado;
    }



    



}

module.exports = FabricaEmpleado;