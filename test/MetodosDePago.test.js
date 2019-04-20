const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';

describe('Funciones basicas del metodo de pago', () => {

    it('Deberia crear un empleado con el metodo de pago por cheque', () => {
        let Carlos = new Empleado('Carlos');
        Carlos.tipoDePago = 'Cheque';
        Carlos.crearMetodoDePago();
        expect(Carlos.metodoDePago.mensajeDeMetodoDePago()).equal('Este sera pagado por cheque');
    })

})