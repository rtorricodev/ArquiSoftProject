const MongoClient = require('mongodb').MongoClient;

export default class Mongo{
    constructor(){
        this.conexion = null;
        this.baseDeDatos = null;
        this.coleccion = null;
        this.enlace = 'mongodb://localhost/27017';
        this.nombreBD = 'ArquiSoft';
        this.establecerConexion()
    }

    async establecerConexion(){
        this.conexion =  await MongoClient.connect(this.enlace,{ useNewUrlParser: true } );
        this.baseDeDatos = this.conexion.db(this.nombreBD);
    }

    async guardar(objeto,tabla){
        let coleccion = this.baseDeDatos.collection(tabla);
        coleccion.insertOne(objeto);
    }

    async listar(tabla){
        let coleccion =  await this.baseDeDatos.collection(tabla);
        let cursor = await coleccion.find({});
        let arreglo = await cursor.toArray();
        return arreglo;
    }

}









