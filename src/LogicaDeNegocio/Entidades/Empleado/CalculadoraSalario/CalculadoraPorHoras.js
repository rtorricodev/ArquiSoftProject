class CalculadoraPorHoras {
    constructor(registroDeTiempo, cuotaSindicato){
        this.registroDeTiempo = registroDeTiempo;
        this.cuotaSindicato = cuotaSindicato;
    }
    calcularMonto() {
        return  this.obtenerCalculoDeSalarioHorasNormal() + this.obtenerCalculoDeSalarioHorasExtras() - this.cuotaSindicato;                
    }

    obtenerCalculoDeSalarioHorasNormal(){
        return this.registroDeTiempo.tarifa * 
               (this.registroDeTiempo.retornarHorasTotalesCalculadas() + this.registroDeTiempo.horasTotalesTrabajadasManuales);
    }

    obtenerCalculoDeSalarioHorasExtras(){
        return (this.registroDeTiempo.tarifa * 1.5) *
        this.registroDeTiempo.retornarHorasExtrasTotalesCalculadas();
    }
}
module.exports = CalculadoraPorHoras;