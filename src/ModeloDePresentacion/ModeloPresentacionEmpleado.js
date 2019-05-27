class ModeloPresentacionEmpleado {
    constructor(){

    }

    retornarRespuestaDeExito(res) {
        return res.status(200).send({
            success: 'true'
        });
    }
}

module.exports = ModeloPresentacionEmpleado;