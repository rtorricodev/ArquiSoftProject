import Mongo from '../Persistencia/ServiciosDB/Mongo.js';

export default class BaseDeDatos {
    constructor(tipo){
        this.tipo = tipo;
        this.instanciarBD();
    }

    instanciarBD(){
        switch(this.tipo){
            case 'no-relacional':
                this.bd = new Mongo();
        }
    }

    async establecerConexion(){
        switch(this.tipo){
            case 'no-relacional':
                return await this.bd.establecerConexion();  
        }
    }

    guardar(objeto,tabla){
        return this.bd.guardar(objeto,tabla);
    }

    listar(tabla){
        return this.bd.listar(tabla);
    }

    borrar(consulta,tabla){
        return this.bd.borrar(consulta,tabla);
    }
    
}

