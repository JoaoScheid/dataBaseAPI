const connection = require('./database/connection');
const express = require('express');
const router = express.Router();
const UserController = require('./UserController');

router.post('/novoUser', UserController.novoUser);
router.get('/listarUsers', UserController.listarUsers);
router.get('/listarUser/:id', UserController.listarUser);
router.put('/atualizar/user/:id', UserController.atualizarUser)
router.delete('/remover/user/:id', UserController.removerUser)
router.post('/novaImagem', UserController.novaImagem);
router.get('/listarImagens', UserController.listarImagens);
router.get('/listarImagem/:id', UserController.listarImagem);
router.put('/atualizar/imagem/:id', UserController.atualizarImagem)
router.delete('/remover/imagem/:id', UserController.removerImagem)
module.exports = router;
