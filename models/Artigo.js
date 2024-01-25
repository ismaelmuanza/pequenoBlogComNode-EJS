const database = require('../database/connection')

class Artigo {

    // listar artigos model
    async listarArtigosModel() {
        try {

            const query = await database.select().table('artigos')
            return query

        } catch (err) {
            console.log('ERRO AO LISTAR ARTIGOS-MODEL')
        }
    }

    // obter artigo por id model
    async obterArtigoPorIdModel(id_artigo) {
        try {

            const query = await database.select().table('artigos').where({ id_artigo })
            return query

        } catch (err) {
            console.log('ERRO AO OBTER ARTIGOO POR ID-MODEL')
        }
    }

    // innerJoin artigo e categoria model
    async innerArtigoCategoriaModel() {
        const query = await database.select(['a.id_artigo', 'a.titulo', 'a.slug', 'a.artigo', 'c.titulo as categoria'])
            .table('artigos as a')
            .leftJoin('categorias as c', 'a.id_categoria', 'c.id_categoria')

        return query
    }

    // criar artigo model
    async criarArtigoModel(artigo) {
        try {

            await database.insert(artigo).table('artigos')
            return true

        } catch (err) {
            console.log('ERRO AO CRIAR ARTIGO-MODEL')
        }
    }
}

module.exports = new Artigo()