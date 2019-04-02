export default class CalculadoraPorComision {
    static calcular(empleado) {
        return empleado.salarioFijo + empleado.hojaDeVenta.comision * empleado.hojaDeVenta.ventasTotales;
    }
}