const MongoClient = require('mongodb').MongoClient;

class Mongo {

    constructor(enlace,nombreDB, coleccion){
        this.enlace = enlace;
        this.nombreDB = nombreDB;
        this.coleccion = coleccion;
        this.configuracion = { useNewUrlParser: true };
        this.conexion =  MongoClient.connect(this.enlace, this.configuracion);
    }

    obtenerColeccion(retortnarInstanciaDeColeccionCallback){
        let nombreDB = this.nombreDB;
        let coleccion = this.coleccion;
        this.conexion.then(instanciaDeMongo => {
            retortnarInstanciaDeColeccionCallback(instanciaDeMongo.db(nombreDB).collection(coleccion))
        }) 
    }

    insertarObjetoEnColeccion(objeto){
        this.obtenerColeccion((instanciaDeColeccion)=>{
            instanciaDeColeccion.insertOne(objeto, ()=>{
                    console.log('se inserto un documento');
            });
        });
    }

    ObtenerListaDocumentosDeUnaColeccion(retornarListaDeDocuemntosCallback){
        this.obtenerColeccion((instanciaDeColeccion)=>{
            instanciaDeColeccion.find({}).toArray((error,listaDeElementos)=>{
                retornarListaDeDocuemntosCallback(listaDeElementos);    
            });
        });
    } 


}


let Empledos = new Mongo('mongodb://localhost/27017','ArquiSoft','Empleados');




