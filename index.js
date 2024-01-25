const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/route')

// view engine e static files
app.set('view engine', 'ejs')
app.use(express.static('public'))

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// express-sessions


// routes
app.use('/', routes)

// servidor
const port = 4000
app.listen(port, () => console.log('API COM KNEX RODANDO NA PORTA: ' + port))