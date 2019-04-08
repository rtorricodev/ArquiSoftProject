export default class RegistroDeTiempo {
    constructor(tarifa, horasTotalesTrabajadasManuales) {
        this.tarifa                         = tarifa;
        this.horasTotalesTrabajadasManuales = horasTotalesTrabajadasManuales;
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
        let horasTotalesCalculadas = 0;
        this.listaDeTarjetas.forEach(tarjeta =>{
            horasTotalesCalculadas += tarjeta.calcularDuracion();
        })
        return horasTotalesCalculadas
    }


}