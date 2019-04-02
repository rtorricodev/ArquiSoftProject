export default class CalculadoraPorComision {
    static calcularMonto(empleado) {
        return empleado.salarioFijo + 
               empleado.hojaDeVenta.comision * 
               empleado.hojaDeVenta.ventasTotales;
    }
}