const express = require('express');
const router = express.Router();

const ClienteController = require('./controllers/ClienteController');

router.get('/cliente', ClienteController.buscarTodos);

module.exports = router;
