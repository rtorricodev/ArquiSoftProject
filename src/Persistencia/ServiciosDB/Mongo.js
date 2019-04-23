const MongoClient = require('mongodb').MongoClient;

export default class Mongo{
    constructor(){
        this.enlace = 'mongodb://localhost/27017';
        this.nombreBD = 'ArquiSoft';
    }

    async establecerConexion(){
        this.conexion =  await MongoClient.connect(this.enlace,{ useNewUrlParser: true } );
        this.baseDeDatos = await this.conexion.db(this.nombreBD);
    }

    guardar(objeto,tabla){
        let coleccion = this.baseDeDatos.collection(tabla);
        return coleccion.insertOne(objeto);
    }

    listar(tabla){
        let coleccion =  this.baseDeDatos.collection(tabla);
        let cursor = coleccion.find({});
        let arreglo = cursor.toArray();
        return arreglo;
    }

    borrar(consulta,tabla){
        let coleccion = this.baseDeDatos.collection(tabla);
        return coleccion.deleteOne(consulta);
    }

}









