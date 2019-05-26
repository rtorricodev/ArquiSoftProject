const RepositorioServidor = require('../src/LogicaDeNegocio/Repositorios/RepositorioServidor.js');

const Express = require('../src/AdaptadoresDeInterfaz/WebServer/Express.js');


let express = new Express();
let repositorioServidor = new RepositorioServidor(express);

repositorioServidor.inicializarServidor(3000);
