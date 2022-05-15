const api = require('./api/req-base-races');
const apiImage = require('./api/req-image');
const express = require("express");
const database = require('../backend/db.json')
const axios = require('axios');
const cat_data = require('./api/api-cat-data');
const cats = require('./controllers/cat-list');

const server = express();

const baseUrlCats = "http://localhost:3001/cats";
const baseUrlCatsHats =  "http://localhost:3001/imageHats";
const baseUrlCatsSun = "http://localhost:3001/imageSunglasses";

server.use(express.json());

server.use('/data', cat_data);
server.use('/cats', cats);

server.listen(4004);