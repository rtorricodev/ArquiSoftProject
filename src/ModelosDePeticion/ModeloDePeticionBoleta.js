let Fecha = require('../LogicaDeNegocio/Entidades/Fecha.js');


class ModeloPeticionBoleta{
    constructor(){

    }

    static modelarFecha(peticion){

        let fecha = new Fecha(
            peticion.query.dia,
            peticion.query.mes,
            peticion.query.anho
        );

        return fecha;
    }
}

module.exports = ModeloPeticionBoleta;

