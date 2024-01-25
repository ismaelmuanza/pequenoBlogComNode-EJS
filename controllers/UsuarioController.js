const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')

class UsuarioController {

    // novo usuario
    async novoUsuario(req, res) {

        res.render('admin/usuarios/novo')
    }

    // criar usuario
    async criarUsuario(req, res) {
        try {

            const { email, senha } = req.body

            if (email.length < 11 || senha.length < 4) {
                res.redirect('/usuario/novo')
                return
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(senha, salt)

            const usuario = {
                email,
                senha: hash
            }

            await Usuario.criarUsuarioModel(usuario)

            res.redirect('/')

        } catch (err) {
            console.log('ERRO AO CRIAR USUARIO: ' + err)
        }
    }

    // login
    async loginUsuario(req, res) {
        try {

            res.render('admin/usuarios/login')

        } catch (err) {
            console.log('ERRO AO RENDERIZAR LOGIN: ' + err)
        }
    }

    // autenticar usuario
    async autenticarUsuario(req, res) {
        try {

            const { email, senha } = req.body

            if (email.length < 11 || senha.length < 4) {
                res.redirect('/admin/usuario/novo')
                return
            }

            const usuario = await Usuario.obterUsuarioPorEmail(email)
            if (usuario.length > 0) {


            } else {

                res.render('admin/usuarios/login')

            }
            // res.render('admin/usuarios/login')

        } catch (err) {
            console.log('ERRO AO AUTENTICAR LOGIN: ' + err)
        }
    }
}

module.exports = new UsuarioController()