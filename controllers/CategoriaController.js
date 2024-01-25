const slugify = require('slugify')
const Categoria = require('../models/Categoria')
class CategoriaController {

    // categorias
    async categorias(req, res) {
        try {

            const categorias = await Categoria.listarCategoriasModel()

            res.render('admin/categorias/categorias', { categorias })

        } catch (err) {
            console.log('ERRO AO LISTAR CATEGORIAS: ' + err)
        }
    }

    // nova categoria
    async novaCategoria(req, res) {
        try {

            res.render('admin/categorias/nova')

        } catch (err) {
            console.log('ERRO AO RENDERIZAR CATEGORIA: ' + err)
        }
    }

    // criar nova categoria
    async criarCategoria(req, res) {
        try {

            const titulo = req.body.titulo

            if (titulo.length < 2) {
                res.redirect('/admin/categoria/nova')
                return
            }

            const categoria = {
                titulo,
                slug: slugify(titulo).toLowerCase()
            }

            await Categoria.criarCategoriaModel(categoria)
            res.redirect('/admin/categorias')

        } catch (err) {
            console.log('ERRO AO CRIAR NOVA CATEGORIA: ' + err)
        }
    }

    // editar categoria
    async editarCategoria(req, res) {

        try {

            const id_categoria = req.params.id

            const categoria = await Categoria.obterCategoriaPorIdModel(id_categoria)

            if (categoria.length > 0) {

                res.render('admin/categorias/editar', { categoria })

            } else {
                res.redirect('/admin/categorias')
                return
            }

        } catch (err) {
            console.log('ERRO AO EDITAR CATEGORIA: ' + err)
        }

    }

    // atualizar categoria
    async atualizarCategoria(req, res) {
        try {

            const titulo = req.body.titulo
            let id_categoria = req.body.id_categoria

            if (titulo.length < 2) {
                res.redirect('/categoria/editar/' + id_categoria)
                return
            }

            const categoria = {
                titulo,
                slug: slugify(titulo).toLowerCase()
            }

            await Categoria.atualizarCategoriaModel(id_categoria, categoria)
            res.redirect('/admin/categorias')

        } catch (err) {
            console.log('ERRO AO ATUALIZAR CATEGORIA: ' + err)
        }
    }

    // deletar categoria
    async deletarCategoria(req, res) {
        try {
            const id_categoria = req.params.id

            await Categoria.deletarCategoriaModel(id_categoria)
            res.redirect('/admin/categorias')

        } catch (err) {
            console.log('ERRO AO DELETAR CATEGORIA: ' + err)
        }
    }
}

module.exports = new CategoriaController()