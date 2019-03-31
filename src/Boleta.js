export default class Boleta {
    constructor(empleado) {
        this.nombreDelEmpleado = empleado.nombre;
        this.tipoDeEmpleado = empleado.tipo;
        switch (this.tipoDeEmpleado) {
            case 'comision':
                this.salario = empleado.salarioPorComision;
                break;
            case 'porHora':
                this.salario = empleado.salarioPorHora;
                break;
            case 'fijo':
                this.salario = empleado.salarioFijo;
                break;
        }
    }
}