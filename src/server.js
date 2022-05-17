const api = require('./api/req-base-races');
const apiImage = require('./api/req-image');
const express = require("express");
const database = require('../db.json');
const axios = require('axios');
const cat_data = require('./api/api-cat-data');
const cats = require('./controllers/cat-list');
const { append } = require('express/lib/response');
const elasticsearch = require('./client/elasticsearch');

const PORT = 4004;
const HOST = '0.0.0.0';

const server = express();

server.use(express.json());

server.use('/data', cat_data);
server.use('/cats', cats);

server.listen(PORT, HOST);