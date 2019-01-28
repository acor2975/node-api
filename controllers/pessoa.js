var Pessoa = require('../models/pessoa')

function listar () {
    return Pessoa.find()
}

function encontrar (id) {
    return Pessoa.findById(id)
}

async function criar (pessoa) {
    var pessoa = new Pessoa({ nome: pessoa.nome })
    await pessoa.save()
    return pessoa
}

function atualizar (pessoa) {
    return Pessoa.findByIdAndUpdate(pessoa.id, { nome: pessoa.nome }, { new: true })
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