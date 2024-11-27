const connection = require('./database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('./TaskController');

router.post('/novoUser', TaskController.novaTarefa);
router.get('/listarUsers', TaskController.listarUsers);
router.get('/listarUser/:id', TaskController.listarUser);
router.put('/atualizar/user/:id', TaskController.atualizarUser)
router.delete('/remover/user/:id', TaskController.removerUser)
module.exports = router;
