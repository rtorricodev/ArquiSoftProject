const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import { beforeEach } from 'mocha';

describe('Funciones basicas del metodo de pago', () => {

    it('Deberia crear un empleado con el metodo de pago por cheque', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.crearMetodoDePago('Cheque');
        expect(Carlos.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por cheque');
    })

    it('Deberia crear un empleado con el metodo de pago en efectivo', () => {
        let Pedro = new Empleado('Carlos');
        Pedro.crearMetodoDePago('Efectivo');
        expect(Pedro.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado en efectivo por RRHH');
    })

})