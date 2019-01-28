var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Pessoa = new Schema({
    nome: String
})

module.exports = mongoose.model('Pessoa', Pessoa)
