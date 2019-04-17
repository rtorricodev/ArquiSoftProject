import Boleta from './Boleta.js';

export default class GeneradorDeBoletas {
    constructor() {
        this.listaDeEmpleados = [];
    }

    generarBoletas() {
        let boletasGeneradas = [];
        this.listaDeEmpleados.forEach(empleado => {
            /* borrar despues de arreglar fecha*/
            let boleta = new Boleta(empleado);
            //if (empleado.estaDisponibleParaPagar) {
            //    let boleta = new Boleta(empleado);
            //    boletasGeneradas.push(empleado.nombre + ' fecha: ' + boleta.fecha + ' monto: ' + boleta.salario);
            //}
            /* borrar despues de arreglar fecha*/
            boletasGeneradas.push(empleado.nombre + ' monto: ' + boleta.salario);
        });
        return boletasGeneradas;
    }

}