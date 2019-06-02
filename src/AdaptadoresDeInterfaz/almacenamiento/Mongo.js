const MongoClient = require('mongodb').MongoClient;

class Mongo{
    constructor(enlace,nombreDeBD){
        this.enlace = enlace;
        this.nombreBD = nombreDeBD;
    }

    async establecerConexion(){
        this.conexion =  await MongoClient.connect(this.enlace,{ useNewUrlParser: true } );
        this.baseDeDatos = await this.conexion.db(this.nombreBD);
    }

    desconectarse(){
        this.conexion.close();
    }

    registrarObjeto(objeto,nombreDeConjunto){
        let coleccion = this.baseDeDatos.collection(nombreDeConjunto);
        return coleccion.insertOne(objeto);
    }

    async obtenerListaDe(nombreDeConjunto){
        let coleccion = await this.baseDeDatos.collection(nombreDeConjunto);
        let cursor = await coleccion.find({});
        let arreglo = await cursor.toArray();
        return arreglo;
    }

    eliminarObjeto(objeto,nombreDeConjunto){
        let consulta = {name: objeto.name};
        let coleccion = this.baseDeDatos.collection(nombreDeConjunto);
        return coleccion.deleteOne(consulta);
    }

}

module.exports = Mongo;









