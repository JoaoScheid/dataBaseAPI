const connection = require('./database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('./TaskController');

router.post('/novoUser', TaskController.novaTarefa);
router.get('/listarUsers', TaskController.listarUsers);
router.get('/listarUser/:id', TaskController.listarUser);
router.put('/atualizar/user/:id', TaskController.atualizarUser)
router.delete('/remover/user/:id', TaskController.removerUser)
router.post('/novaImagem', TaskController.novaImagem);
router.get('/listarImagens', TaskController.listarImagens);
router.get('/listarImagem/:id', TaskController.listarImagem);
router.put('/atualizar/imagem/:id', TaskController.atualizarImagem)
router.delete('/remover/imagem/:id', TaskController.removerImagem)
module.exports = router;
