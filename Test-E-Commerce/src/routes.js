const express = require('express');
const router = express.Router();

const ClienteController = require('./controllers/ClienteController');

router.get('/cliente', ClienteController.buscarTodos);
router.get('/cliente/:idcliente', ClienteController.searchOne);


module.exports = router;
