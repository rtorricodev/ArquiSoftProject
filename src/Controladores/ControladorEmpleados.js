let ModeloDePeticionEmpleado = require('../ModelosDePeticion/ModeloDePetecionEmpleado.js');
let EmpleadoInteractor = require('../LogicaDeNegocio/CasosDeUso/EmpleadoInteractor.js');
let ModeloPresentadorEmpleado = require('../ModeloDePresentacion/ModeloPresentacionEmpleado.js')

class ControladorEmpleados{
    constructor(repositorio){
        this.repositorio = repositorio;
    }

    registrarEmpleado(peticion, respuseta){
        let empleado = ModeloDePeticionEmpleado.modelarEmpleado(peticion);
        EmpleadoInteractor.guardarEmpleado(empleado,this.repositorio);
        ModeloPresentadorEmpleado.retornarRespuestaDeExito(respuseta);
    }

    async listarEmpleados(peticion, respuesta){
        let listaEmpleados =  await EmpleadoInteractor.listarEmpleados(this.repositorio);
        ModeloPresentadorEmpleado.retornarLista(listaEmpleados,respuesta);
    }

}

module.exports = ControladorEmpleados;