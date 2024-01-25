const Artigo = require('../models/Artigo')
const slugify = require('slugify')
const Categoria = require('../models/Categoria')

class ArtigoController {

    // index
    async index(req, res) {
            try {

                const artigos = await Artigo.listarArtigosModel()

                res.render('admin/artigos/index', { artigos })

            } catch (err) {
                console.log('ERRO AO RENDERIZAR INDEX ARTIGOS: ' + err)
            }
        }
        // artigos
    async artigos(req, res) {
        try {

            const artigosCategorias = await Artigo.innerArtigoCategoriaModel()

            res.render('admin/artigos/artigos', { artigosCategorias })

        } catch (err) {
            console.log('ERRO AO RENDERIZAR ARTIGOS: ' + err)
        }
    }

    // artigo
    async artigo(req, res) {
        try {

            const id_artigo = req.params.id

            const artigo = await Artigo.obterArtigoPorIdModel(id_artigo)

            if (artigo.length > 0) {
                res.render('admin/artigos/artigo', { artigo })

            } else {
                res.redirect('/')
                return
            }


            // res.render('admin/artigos/artigos', { artigosCategorias })

        } catch (err) {
            console.log('ERRO AO RENDERIZAR ARTIGOS: ' + err)
        }
    }

    // novo artigo
    async novoArtigo(req, res) {
        try {

            const categorias = await Categoria.listarCategoriasModel()

            res.render('admin/artigos/novo', { categorias })

        } catch (err) {
            console.log('ERRO AO RENDERIZAR ARTIGO: ' + err)
        }
    }

    // criar novo artigo
    async criarArtigo(req, res) {
        try {

            const { titulo, artigo, categoria_artigo } = req.body

            if (titulo.length < 2 || artigo.length < 2 || isNaN(categoria_artigo)) {
                res.redirect('/admin/artigo/novo')
                return
            }

            const dadosArtigo = {
                titulo,
                slug: slugify(titulo).toLowerCase(),
                artigo,
                id_categoria: categoria_artigo
            }

            await Artigo.criarArtigoModel(dadosArtigo)
            res.redirect('/admin/artigos')


        } catch (err) {
            console.log('ERRO AO CRIAR ARTIGO: ' + err)
        }
    }
}

module.exports = new ArtigoController()