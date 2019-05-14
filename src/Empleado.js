export default class Empleado {
    constructor(nombre, apellido, celularPrincipal, correoPrincipal, calculadoraSalario, calculadoraFechaDePago, metodoDePago, notificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.celularPrincipal = celularPrincipal;
        this.correoPrincipal = correoPrincipal;
        this.calculadoraSalario = calculadoraSalario;
        this.calculadoraFechaDePago = calculadoraFechaDePago;
        this.metodoDePago = metodoDePago;
        this.notificacion = notificacion;
    }

    verificarSiEstaDisponibleParaPagar(fecha) {
        return this.calculadoraFechaDePago.estaDisponibleParaPagar(fecha);
    }

    calcularSalario() {
        return this.calculadoraSalario.calcularMonto();
    }

    notificar() {
        return this.notificacion.tipo.notificar();
    }
}