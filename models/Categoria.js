const database = require('../database/connection')

class Categoria {

    // listar categorias model
    async listarCategoriasModel() {

        try {
            const query = await database.select().table('categorias')
            return query

        } catch (err) {
            console.log('ERRO AO LISTAR CATEGORIAS-MODEL: ' + err)
        }
    }

    // obter categoria por id
    async obterCategoriaPorIdModel(id_categoria) {
        try {
            const query = await database.select().table('categorias').where({ id_categoria })
            return query

        } catch (err) {
            console.log('ERRO AO OBTER CATEGORIA-MODEL: ' + err)
        }
    }

    // criar categoria model
    async criarCategoriaModel(categoria) {
        try {
            await database.insert(categoria).table('categorias')
            return true

        } catch (err) {
            console.log('ERRO AO CRIAR NOVA CATEGORIA-MODEL: ' + err)
        }
    }

    // atualizar categoria
    async atualizarCategoriaModel(id_categoria, categoria) {
        try {
            await database.update(categoria).table('categorias').where({ id_categoria })
            return true

        } catch (err) {
            console.log('ERRO AO ATUALIZAR CATEGORIA-MODEL: ' + err)
        }
    }

    // deletar categoria model
    async deletarCategoriaModel(id_categoria) {
        try {
            await database.where({ id_categoria }).delete().table('categorias')
            return true

        } catch (err) {
            console.log('ERRO AO DELETAR CATEGORIA-MODEL: ' + err)
        }
    }
}

module.exports = new Categoria()