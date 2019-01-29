var Pessoa = require('../models/pessoa')

function listar () {
    return Pessoa.find()
}

function encontrar (id) {
    return Pessoa.findById(id)
}

function criar (pessoa) {
    var model = new Pessoa(pessoa)
    return model.save()
}

function atualizar (id, pessoa) {
    return Pessoa.findByIdAndUpdate(id, pessoa, { new: true })
}

function remover (id) {
    return Pessoa.findByIdAndDelete(id)
}

module.exports = {
    listar: listar,
    encontrar: encontrar,
    criar: criar,
    atualizar: atualizar,
    remover: remover
}