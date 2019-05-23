import Boleta from '../../Entidades/Boleta.js';



export default class GeneradorDeBoletas {
    constructor(listaDeEmpleados) {
        this.listaDeEmpleados =  listaDeEmpleados;
    }

    generarBoletas(fecha) {
        let boletasGeneradas = [];
        this.listaDeEmpleados.forEach(empleado => {
            if (empleado.verificarSiEstaDisponibleParaPagar(fecha)) {
                let boleta = new Boleta(empleado);
                boletasGeneradas.push(empleado.nombre +' monto: ' + empleado.calcularSalario());
            }
        });
        return boletasGeneradas;
    }

}


