import Boleta from './Boleta.js';
import Persistencia from '../BaseDeDatos/Persistencia.js';


export default class GeneradorDeBoletas {
    constructor(listaDeEmpleados) {
        this.listaDeEmpleados = listaDeEmpleados;
    }

    generarBoletas(fecha) {
        let boletasGeneradas = [];
        this.listaDeEmpleados.forEach(empleado => {
            if (empleado.verificarSiEstaDisponibleParaPagar(fecha)) {
                let boleta = new Boleta(empleado);
                boletasGeneradas.push(empleado.nombre +' monto: ' + boleta.salario);
            }
        });
        return boletasGeneradas;
    }

}