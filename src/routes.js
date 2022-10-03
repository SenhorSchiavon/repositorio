const express = require("express");
const router = express.Router();

const contatoController = require('./controllers/contatocontroller')

router.get('/contatos', contatoController.buscarTodos); //pegar todos os contatos
router.get('/contato/:codigo', contatoController.buscarUm); //pegar um dos contatos
router.post('/contato', contatoController.inserir); //inserir novo
router.put('/contato/:codigo',contatoController.alterar); //alterar
router.delete('/contato/:codigo',contatoController.excluir); //excluir

module.exports = router;
