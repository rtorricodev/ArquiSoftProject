let Fecha = require('../LogicaDeNegocio/Entidades/Fecha.js');


class ModeloPeticionBoleta{
    constructor(){

    }

    static modelarFecha(peticion){

        let fecha = new Fecha(
            peticion.body.dia,
            peticion.body.mes,
            peticion.body.anho
        );

        return fecha;
    }
}

module.exports = ModeloPeticionBoleta;

