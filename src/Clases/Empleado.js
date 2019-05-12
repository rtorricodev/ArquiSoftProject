import Configuracion from '../Clases/Configuracion.js';

export default class Empleado {
    constructor(nombre, apellido, celularPrincipal, correoPrincipal, calculadoraSalario, calculadoraFechaDePago) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.celularPrincipal = celularPrincipal;
        this.correoPrincipal = correoPrincipal;
        this.configuracion = new Configuracion();
        this.calculadoraSalario = calculadoraSalario;
        this.calculadoraFechaDePago = calculadoraFechaDePago;
    }

    verificarSiEstaDisponibleParaPagar(fecha) {
        return this.calculadoraFechaDePago.estaDisponibleParaPagar(fecha);
    }

    calcularSalario(){
        return this.calculadoraSalario.calcularMonto();
    }
}