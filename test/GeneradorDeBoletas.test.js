const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import Fecha from '../src/Clases/Fecha/Fecha.js';
import GeneradorDeBoletas from '../src/Clases/GeneradorDeBoletas.js';

describe('Deberia generar boletas para cada empleado', () => {

    it('Verificar si Genera la boletas para Carlos y Juan', () => {

        let fechaInicioDeTrabajo = new Fecha(1, 4, 2019);
        let Carlos = new Empleado('Carlos');
        Carlos.esEmpleadoFijo(2000, fechaInicioDeTrabajo);

        let Juan = new Empleado('Juan');
        Juan.esEmpleadoFijo(3000, fechaInicioDeTrabajo);

        let listaDeEmpleados = [];
        listaDeEmpleados.push(Carlos);
        listaDeEmpleados.push(Juan);
        s
        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(28,2,2019);

        let generadorDeBoletas = new GeneradorDeBoletas(listaDeEmpleados);

        expect(generadorDeBoletas.generarBoletas(fecha)[0]).equal('Carlos monto: 2000');
        expect(generadorDeBoletas.generarBoletas(fecha)[1]).equal('Juan monto: 3000');
    })

})