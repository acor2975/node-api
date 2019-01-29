var express = require('express')
var router = express.Router()
var PessoaController = require('../controllers/pessoa')

router.get('/', async function (req, res) {
    var lista = await PessoaController.listar()
    res.send(lista)
})

router.get('/:id', async function (req, res) {
    var id = req.params.id
    try {
        var pessoa = await PessoaController.encontrar(id)  
        res.send(pessoa)
    } catch (err) {
        res.status(400).send('ops! Pessoa nao encontrada.')
    }
})

router.post('/', async function (req, res) {
    var pessoa = await PessoaController.criar(req.body)
    var response = {
        message: 'Pessoa criada com sucesso!',
        data: pessoa
    }
    res.send(response)
})

router.put('/:id', async function (req, res) {
    var id = req.params.id
    try {
        var pessoa = await PessoaController.atualizar(id, req.body)
        var response = {
            message: 'Pessoa atualizada com sucesso!',
            data: pessoa
        }
        res.send(response)
    } catch (err) {
        res.status(400).send('ops! Pessoa nao encontrada.')
    }
})

router.delete('/:id', async function (req, res) {
    var id = req.params.id
    try {
        var pessoa = await PessoaController.remover(id)
        if (!pessoa) throw new Error()
        var response = {
            message: 'Pessoa removida com sucesso!',
            data: pessoa
        }
        res.send(response)
    } catch (err) {
        res.status(400).send('ops! Pessoa nao encontrada.')
    }
})

module.exports = router