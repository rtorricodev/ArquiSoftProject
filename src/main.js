const RepositorioServidor = require('../src/LogicaDeNegocio/Repositorios/RepositorioServidor.js');
const RepositorioAlmacenamiento = require('../src/LogicaDeNegocio/Repositorios/RepositorioAlmacenamiento.js');

const Express = require('../src/AdaptadoresDeInterfaz/WebServer/Express.js');
const Mongo = require('../src/AdaptadoresDeInterfaz/almacenamiento/Mongo.js');

var mongo = new Mongo('mongodb://localhost/27017','ArquiSoft');
var mongoConected = mongo.establecerConexion();

mongoConected.then( () =>{
    var repositorioAlmacenamiento = new RepositorioAlmacenamiento(mongo);
    let express = new Express(repositorioAlmacenamiento);
    let repositorioServidor = new RepositorioServidor(express);
    repositorioServidor.inicializarServidor(3000);
})

