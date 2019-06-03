class RegistroDeTiempo {
    constructor(tarifa, horasTotalesTrabajadasManuales, horasATrabajarPorDia) {
        this.tarifa                         = tarifa;
        this.horasTotalesTrabajadasManuales = horasTotalesTrabajadasManuales;
        this.horasATrabajarPorDia           = horasATrabajarPorDia;
        this.listaDeTarjetas                = [];
    }

    agregarTarjetaARegistro(tarjeta){
        this.listaDeTarjetas.push(tarjeta);
    }

    retornarNumeroDeTarjetas(){
        return this.listaDeTarjetas.length;
    }

    agregarListaDeTarjetas(listaDeTarjetasPorAgregar){
        listaDeTarjetasPorAgregar.forEach(tarjeta => {
            this.agregarTarjetaARegistro(tarjeta);
        });
    }

    retornarHorasTotalesCalculadas(){
        let horasExtrasTotalesCalculadas = 0;
        this.listaDeTarjetas.forEach(tarjeta =>{
            horasExtrasTotalesCalculadas += this.horasATrabajarPorDia;
        })
        return horasExtrasTotalesCalculadas;
    }

    retornarHorasExtrasTotalesCalculadas(){
        let horasExtrasTotalesCalculadas = 0;
        this.listaDeTarjetas.forEach(tarjeta =>{
            if(tarjeta.calcularDuracion() > this.horasATrabajarPorDia)
                horasExtrasTotalesCalculadas += tarjeta.calcularDuracion() - this.horasATrabajarPorDia;
        })
        return horasExtrasTotalesCalculadas;
    }

}

module.exports = RegistroDeTiempo;