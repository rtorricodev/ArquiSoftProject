export default class RegistroDeTiempo {
    constructor(tarifa, horasTotalesTrabajadasManuales, horasATrabajar) {
        this.tarifa                         = tarifa;
        this.horasTotalesTrabajadasManuales = horasTotalesTrabajadasManuales;
        this.horasATrabajar                 = horasATrabajar;
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
        this.listaDeTarjetas.forEach(tarjeta =>{
            this.horasTotalesTrabajadasManuales += this.horasATrabajar;
        })
        return this.horasTotalesTrabajadasManuales;
    }

    retornarHorasExtrasTotalesCalculadas(){
        let horasExtrasTotalesCalculadas = 0;
        this.listaDeTarjetas.forEach(tarjeta =>{
            if(tarjeta.calcularDuracion() > this.horasATrabajar)
                horasExtrasTotalesCalculadas += tarjeta.calcularDuracion() - this.horasATrabajar;
        })
        return horasExtrasTotalesCalculadas;
    }


}