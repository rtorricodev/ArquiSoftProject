import Boleta from './Boleta.js';

export default class GeneradorDeBoletas {
    constructor() {
        this.listaDeEmpleados = [];
    }

    generarBoletas() {
        let boletasGeneradas = [];
        this.listaDeEmpleados.forEach(empleado => {
            let boleta = new Boleta(empleado);
            // if (boleta.estaDisponibleParaPagar) {
            //     boletasGeneradas.push(empleado.nombre + ' fecha: ' + boleta.fecha + ' monto: ' + boleta.salario);
            // }
            boletasGeneradas.push(empleado.nombre + ' monto: ' + boleta.salario);
        });
        return boletasGeneradas;
    }

}