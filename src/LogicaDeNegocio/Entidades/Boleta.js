class Boleta {
    constructor(empleado) {
        this.empleado = empleado;
        this.salario = empleado.calcularSalario();
    }
}

module.exports = Boleta;