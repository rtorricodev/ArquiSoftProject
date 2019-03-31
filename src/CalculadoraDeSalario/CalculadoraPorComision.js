export default class CalculadoraPorComision {
    static calcular(empleado) {
        let salario = 0;
        if (empleado.tipo === 'comision') {
            salario = empleado.salarioFijo + empleado.hojaDeVenta.comision * empleado.hojaDeVenta.ventasTotales;
        }
        return salario;
    }
}