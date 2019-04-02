export default class Boleta {
    constructor(empleado) {
        this.nombreDelEmpleado = empleado.nombre;
        this.tipoDeEmpleado = empleado.tipo;
        this.salario = empleado.salario;
        console.log("SALARIO: " + this.salario);
    }
}