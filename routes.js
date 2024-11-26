const connection = require('./database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('./TaskController');

router.post('/novoUser', TaskController.novaTarefa);
router.get('/listarUsers', TaskController.listarUsers);
module.exports = router;
