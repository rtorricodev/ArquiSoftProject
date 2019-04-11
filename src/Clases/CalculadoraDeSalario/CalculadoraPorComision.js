export default class CalculadoraPorComision {
    static calcularMonto(empleado) {
        return empleado.salarioFijo + 
               empleado.RegistroDeVenta.comision * 
               empleado.RegistroDeVenta.ventasTotales;
    }
}