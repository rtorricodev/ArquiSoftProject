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

    async obtenerListaDe(nombreDeConjunto){
        let lista = await this.bd.obtenerListaDe(nombreDeConjunto);
        return lista;
    }

    eliminarObjeto(objeto,nombreDeConjunto){
        return this.bd.eliminarObjeto(objeto,nombreDeConjunto);
    }
}

module.exports = RepositorioAlmacenamiento;

