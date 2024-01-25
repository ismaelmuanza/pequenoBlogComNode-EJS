const express = require('express')
const router = express.Router()
const CategoriaController = require('../controllers/CategoriaController')
const ArtigoController = require('../controllers/ArtigoController')
const UsuarioController = require('../controllers/UsuarioController')

// Categorias
router.get('/admin/categorias', CategoriaController.categorias)
router.get('/admin/categoria/nova', CategoriaController.novaCategoria)
router.post('/categoria/nova', CategoriaController.criarCategoria)
router.get('/categoria/editar/:id', CategoriaController.editarCategoria)
router.post('/categoria/atualizar', CategoriaController.atualizarCategoria)
router.get('/categoria/deletar/:id', CategoriaController.deletarCategoria)

// Artigos
router.get('/', ArtigoController.index)
router.get('/admin/artigo/novo', ArtigoController.novoArtigo)
router.post('/artigo/novo', ArtigoController.criarArtigo)
router.get('/admin/artigos', ArtigoController.artigos)
router.get('/admin/artigo/:id', ArtigoController.artigo)

// Usuarios
router.get('/usuario/novo', UsuarioController.novoUsuario)
router.post('/admin/usuario/criar', UsuarioController.criarUsuario)
router.get('/admin/usuario/login', UsuarioController.loginUsuario)
router.get('/usuario/autenticar', UsuarioController.loginUsuario)


module.exports = router