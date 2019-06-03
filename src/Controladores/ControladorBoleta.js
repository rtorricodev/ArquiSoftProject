let ModeloDePeticionBoleta = require('../ModelosDePeticion/ModeloDePeticionBoleta.js');
let BoletaInteractor = require('../LogicaDeNegocio/CasosDeUso/BoletaInteractor.js');
let ModeloPresentardor = require('../ModeloDePresentacion/ModeloPresentacion.js');

class ControladorBoleta{

    constructor(repositorio){
        this.repositorio = repositorio;
    }   

    listarBoletas(peticion,respuesta){
        let fecha = ModeloDePeticionBoleta.modelarFecha(peticion);
        let listaDeBoletas = BoletaInteractor.generarBoletas(fecha,this.repositorio);
        ModeloPresentardor.retornarLista(listaDeBoletas,respuesta);
    }
}

module.exports = ControladorBoleta;