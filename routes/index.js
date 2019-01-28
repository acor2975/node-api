var express = require('express')
var router = express.Router()

var pessoa = require('./pessoa')

router.use('/pessoa', pessoa)

module.exports = router
