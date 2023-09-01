const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const server = express();
const path = require('path');

const publicfolder = path.join(__dirname, 'public');

server.use(cors());

server.use(express.static(publicfolder));
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });
server.listen('3333', () => {
    console.log('http://localhost:3333');
});
