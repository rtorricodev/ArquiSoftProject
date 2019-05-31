let ModeloDePeticionEmpleado = require('../ModelosDePeticion/ModeloDePetecionEmpleado.js');
let CrearEmpleado = require('../LogicaDeNegocio/CasosDeUso/crearEmpleado.js');
let ModeloPresentadorEmpleado = require('../ModeloDePresentacion/ModeloPresentacionEmpleado.js')

class ControladorEmpleados{
    constructor(repositorio){
        this.repositorio = repositorio;
    }

    registrarEmpleado(peticion, respuseta){
        let modeloPeticion = new ModeloDePeticionEmpleado();
        let modeloEmpleado = modeloPeticion.modelarEmpleado(peticion);

        let crearEmpleado = new CrearEmpleado();
        crearEmpleado.guardarEmpleado(modeloEmpleado,this.repositorio);
   
        let modeloPresentador = new ModeloPresentadorEmpleado();
        modeloPresentador.retornarRespuestaDeExito(respuseta);
    }
}

module.exports = ControladorEmpleados;