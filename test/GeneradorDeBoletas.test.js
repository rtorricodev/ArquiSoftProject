const expect = require('chai').expect;

import Empleado from '../src/Clases/Empleado.js';
import Fecha from '../src/Clases/Fecha/Fecha.js';
import GeneradorDeBoletas from '../src/Clases/GeneradorDeBoletas.js';

import CalculadoraFechaPorComision from '../src/Clases/CalculadoraDeFechaPago/CalculadoraFechaPorComision.js';
import CalculadoraFechaPorHoras from '../src/Clases/CalculadoraDeFechaPago/CalculadoraFechaPorHoras.js';
import CalculadoraFechaFija from '../src/Clases/CalculadoraDeFechaPago/CalculadoraFechaFija.js';

import CalculadoraPorComision from '../src/Clases/CalculadoraDeSalario/CalculadoraPorComision.js';
import CalculadoraPorHoras from '../src/Clases/CalculadoraDeSalario/CalculadoraPorHoras.js';
import CalculadoraFija from '../src/Clases/CalculadoraDeSalario/CalculadoraFija.js';

describe('Deberia generar boletas para cada empleado', () => {

    it('Verificar si Genera la boletas para Carlos y Juan', () => {
        let generadorDeBoletas = new GeneradorDeBoletas();
        let fechaInicioDeTrabajo = new Fecha(1, 4, 2019);
        let calculadoraFija = new CalculadoraFija(2000, fechaInicioDeTrabajo);
        let calculadoraFechaFija = new CalculadoraFechaFija();
        let Carlos = new Empleado('Carlos', 'Bodoke', 75987829, 'cobodoke@gmail.com', calculadoraFija, calculadoraFechaFija);
        let Juan = new Empleado('Juan', 'Bodoke', 75987829, 'cobodoke@gmail.com', calculadoraFija, calculadoraFechaFija);
        generadorDeBoletas.listaDeEmpleados.push(Carlos);
        generadorDeBoletas.listaDeEmpleados.push(Juan);
        let fecha = new Fecha();
        fecha.formatearFechaDDMMAA(28,2,2019);
        expect(generadorDeBoletas.generarBoletas(fecha)[0]).equal('Carlos monto: 2000');
        expect(generadorDeBoletas.generarBoletas(fecha)[1]).equal('Juan monto: 2000');
    })

})