const express = require('express');
const router = express.Router();

const ClienteController = require('./controllers/ClienteController');

router.get('/',(req,res)=>{
    console.log('teste');
    res.send('teste');
});
module.exports = router;
