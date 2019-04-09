const expect = require('chai').expect;

import Empleado from '../src/Empleado.js';
import Boleta from '../src/Boleta.js';

describe('Funciones basicas de la calculadora de fecha de pago', () => {

    it('Verificar si Carlos, un empleado fijo, esta disponible para recibir su pago tomando en cuenta la fecha actual', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000);
        let BoletaDeCarlos = new Boleta(Carlos);
        expect(BoletaDeCarlos.estaDisponibleParaPagar).equal(false);
    })

})