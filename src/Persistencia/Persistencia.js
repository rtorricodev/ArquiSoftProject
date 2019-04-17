import Mongo from '../Persistencia/ServiciosDB/Mongo.js';

export default class Persistencia {
    constructor(tipo){
        this.tipo = tipo;
        this.BD = this.instanciarBD();
        
    }

    instanciarBD(){
        switch(this.tipo){
            case 'no-relacional':
                return new Mongo();
        }
    }

    guardar(objeto,tabla){
        this.BD.guardar(objeto,tabla);
    }

    obtenerTabla(tabla){
        return this.BD.obtenerTabla(tabla);
        
    }
    
}

