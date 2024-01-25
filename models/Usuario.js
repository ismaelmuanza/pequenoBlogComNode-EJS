const database = require('../database/connection')

class Usuario {

    // obter usuario por email
    async obterUsuarioPorEmail(email) {
        const query = await database.select().table('usuarios').where({ email })
        return query
    }

    // criar usuario model
    async criarUsuarioModel(usuario) {
        try {
            await database.insert(usuario).table('usuarios')
            return true

        } catch (err) {
            console.log('ERRO AO CRIAR USUARIO-MODEL: ' + err)
        }
    }
}

module.exports = new Usuario()