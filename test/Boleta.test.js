const expect = require('chai').expect;

import Empleado from '../src/Empleado.js';
import Boleta from '../src/Boleta.js';
import RegistroDeTiempo from '../src/Hojas/RegistroDeTiempo.js';
import RegistroDeVenta from '../src/Hojas/RegistroDeVenta.js';

describe('Funciones basicas de la calculadora de salario', () => {

    

    //TODO: Si un empleado fijo empieza a medio mes entonces solo se le paga ese tiempo✅ //chino
    //TODO: Si trabajo más de 8 horas se le paga se le paga más 1.5 más ✅ //chino
    //TODO: En un futuro debe tener persistencia✅ // Rodri
    //TOOD: mover calculadora de salario a empleado✅ //Chino
    //TODO: Fecha en que corresponde pagar ✅
    //TODO: Organizar tests✅ // Rodri
    //TODO: Crear seteador de fecha✅ // Oscar
    //TODO: Empleados eligen su metodo de pago : Deposito, cheque, efectivo RRHH ✅ //Oscar
    //TODO: Empleados pueden elegir como reciben las notificaciones de su pago una o más whatsaap,email,sms, push notificaciones ✅ // oscar  y rodri
    
    //TODO: Se le envia boleto por email✅ // chino
    //TODO: Empleados deben escoger la manera de su notificacion de pago whatsapp,email,SMS,Facebook
    //TODO: Interfaz de usario debe ser web 
    //TODO: Algunos empleados del sindicato pagan una cuota mensual Si tiene una deuda se le quita de su salario


    it('Deberia generar boleta de salario para Carlos que es empleado fijo con 2000$ de salario', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000);
        let BoletaDeCarlos = new Boleta(Carlos);
        expect(BoletaDeCarlos.salario).equal(2000);
    })

    it('Deberia generar boleta de salario para Roxana que es un empleado por hora', () => {
        let RegistroDeTiempoDeRoxana = new RegistroDeTiempo(7, 180);
        let Roxana = new Empleado('Roxana');
        Roxana.esEmpleadoPorHora(RegistroDeTiempoDeRoxana);
        let BoletaDeRoxana = new Boleta(Roxana);
        expect(BoletaDeRoxana.salario).equal(1260);
    })

    it('Deberia generar boleta de salario para Juan que es un empleado por comision', () => {
        let RegistroDeVentaDeJuan = new RegistroDeVenta(2, 200);
        let Juan = new Empleado('Juan');
        Juan.esEmpleadoPorComision(RegistroDeVentaDeJuan,2000);
        let BoletaDeJuan = new Boleta(Juan);
        expect(BoletaDeJuan.salario).equal(2400);
    })

    it('Deberia generar boleta de salario para Carlos que era un empleado fijo y ahora es por hora', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000);
        let RegistroDeTiempoDeCarlos = new RegistroDeTiempo(7, 180);
        Carlos.esEmpleadoPorHora(RegistroDeTiempoDeCarlos);
        let BoletaDeCarlos = new Boleta(Carlos);
        expect(BoletaDeCarlos.salario).equal(1260);
    })

    it('Deberia generar boleta de salario para Carlos que era un empleado fijo y ahora es por comision', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000);
        let RegistroDeVentasDeCarlos = new RegistroDeVenta(2, 200);
        Carlos.esEmpleadoPorComision(RegistroDeVentasDeCarlos,2000);
        let BoletaDeCarlos = new Boleta(Carlos);
        expect(BoletaDeCarlos.salario).equal(2400);
    })


})