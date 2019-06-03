class ModeloPresentacionEmpleado {
    constructor(){

    }

    static retornarRespuestaDeExito(respuesta) {
        return respuesta.status(200).send({
            success: 'true'
        });
    }

    static retornarLista(lista, respuesta) {
        respuesta.send(lista);
    }
}

module.exports = ModeloPresentacionEmpleado;