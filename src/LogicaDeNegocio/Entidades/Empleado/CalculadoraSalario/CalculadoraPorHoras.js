class CalculadoraPorHoras {
    constructor(registroDeTiempo){
        this.registroDeTiempo = registroDeTiempo;
    }
    calcularMonto() {
        return  this.obtenerCalculoDeSalarioHorasNormal() + this.obtenerCalculoDeSalarioHorasExtras();                
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