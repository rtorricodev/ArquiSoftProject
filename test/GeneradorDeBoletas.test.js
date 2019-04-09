const expect = require('chai').expect;

import Empleado from '../src/Empleado.js';
import GeneradorDeBoletas from '../src/GeneradorDeBoletas.js';

describe('Deberia generar boletas para cada empleado', () => {

    it('Verificar si Genera la boletas para Carlos y Juan', () => {
        let generadorDeBoletas = new GeneradorDeBoletas();
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000);
        let Juan = new Empleado('Juan');
        Juan.esEmpleadoFijo(3000);
        generadorDeBoletas.listaDeEmpleados.push(Carlos);
        generadorDeBoletas.listaDeEmpleados.push(Juan);
        expect(generadorDeBoletas.generarBoletas()[0]).equal('Carlos monto: 2000');
        expect(generadorDeBoletas.generarBoletas()[1]).equal('Juan monto: 3000');
    })

})