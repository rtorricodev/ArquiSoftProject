export default class CalculadoraPorComision {
    constructor(salarioFijo, RegistroDeVenta){
        this.salarioFijo = salarioFijo;
        this.RegistroDeVenta = RegistroDeVenta;
    }
    
    calcularMonto() {
        return this.salarioFijo + 
               this.RegistroDeVenta.comision * 
               this.RegistroDeVenta.ventasTotales;
    }
}