export default class CalculadoraPorComision {
    calcularMonto(empleado) {
        return empleado.salarioFijo + 
               empleado.RegistroDeVenta.comision * 
               empleado.RegistroDeVenta.ventasTotales;
    }
}