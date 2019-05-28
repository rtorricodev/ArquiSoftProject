class RepositorioServidor{
    constructor(server){
        this.server = server;
    }

    inicializarServidor(puerto){
        this.server.inicializarServidor(puerto);
    }
}

module.exports = RepositorioServidor
