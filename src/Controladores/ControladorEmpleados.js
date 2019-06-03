let ModeloDePeticionEmpleado = require('../ModelosDePeticion/ModeloDePetecionEmpleado.js');
let EmpleadoInteractor = require('../LogicaDeNegocio/CasosDeUso/EmpleadoInteractor.js');
let ModeloPresentador = require('../ModeloDePresentacion/ModeloPresentacion.js')

class ControladorEmpleados{
    constructor(repositorio){
        this.repositorio = repositorio;
    }

    registrarEmpleado(peticion, respuseta){
        let empleado = ModeloDePeticionEmpleado.modelarEmpleado(peticion);
        EmpleadoInteractor.guardarEmpleado(empleado,this.repositorio);
        ModeloPresentador.retornarRespuestaDeExito(respuseta);
    }

    async listarEmpleados(peticion, respuesta){
        let listaEmpleados =  await EmpleadoInteractor.listarEmpleados(this.repositorio);
        ModeloPresentador.retornarLista(listaEmpleados,respuesta);
    }

}

module.exports = ControladorEmpleados;