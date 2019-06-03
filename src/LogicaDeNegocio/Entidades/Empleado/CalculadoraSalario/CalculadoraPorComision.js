class CalculadoraPorComision {
    constructor(salarioFijo, RegistroDeVenta, cuotaSindicato){
        this.salarioFijo = salarioFijo;
        this.RegistroDeVenta = RegistroDeVenta;
        this.cuotaSindicato = cuotaSindicato;
    }
    
    calcularMonto() {
        return this.salarioFijo + 
               this.RegistroDeVenta.comision * 
               this.RegistroDeVenta.ventasTotales - this.cuotaSindicato;
    }
}

module.exports = CalculadoraPorComision;