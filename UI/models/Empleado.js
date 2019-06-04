class Empleado{
    constructor(nombre, apellido, celularPrincipal, correoPrincipal, tipo, salarioFijo, dia, mes, anho, tarifa, horasManuales, horasATrabajar, comision, ventasTotales) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.celularPrincipal = celularPrincipal;
        this.correoPrincipal = correoPrincipal;
        this.montoSindicato = 0;

        this.tipo = tipo;

        this.salarioFijo = salarioFijo;
        this.dia = dia;
        this.mes = mes;
        this.anho = anho;

        this.tarifa = tarifa;
        this.horasManuales = horasManuales;
        this.horasATrabajar = horasATrabajar;

        this.comision = comision;
        this.ventasTotales = ventasTotales;
    }
};