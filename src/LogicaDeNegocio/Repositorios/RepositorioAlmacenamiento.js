

class RepositorioAlmacenamiento {
    constructor(bd){
        this.bd = bd;
    }


    registrarObjeto(objeto,nombreDeConjunto){
        return this.bd.registrarObjeto(objeto,nombreDeConjunto);
    }

    registrarObjetos(listaDeObjetos,nombreDeConjunto){
        listaDeObjetos.forEach( objeto => {
            this.registrarObjeto(objeto,nombreDeConjunto);
        });
    }

    obtenerListaDe(nombreDeConjunto){
        return this.bd.obtenerListaDe(nombreDeConjunto);
    }

    eliminarObjeto(objeto,nombreDeConjunto){
        return this.bd.eliminarObjeto(objeto,nombreDeConjunto);
    }
}

module.exports = RepositorioAlmacenamiento;

