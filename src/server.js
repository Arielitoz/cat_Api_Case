const api = require('./catApi');
const express = require("express");
const database = require('../backend/db.json')
const axios = require('axios');

const server = express();

const baseUrlCats = "http://localhost:3001/cats";

server.use(express.json());

server.get("/races", async (req, res) => {
    try {
        const { data } =  await api.get('breeds');


        if (database.cats.length == data.length) {
            res.send({ message: 'Nada a ser inserido.' })
        } else {
            for(let i = 0; i <= data.length; i ++) {
                axios.post(baseUrlCats, {
                    "id": data[i].id,
                    "name": data[i].name,
                    "origin": data[i].origin,
                    "description": data[i].description,
                    "temperament": data[i].temperament,
                    "imageId": data[i].reference_image_id
                })
            }
            
            return res.send({ message: 'Adicionando gatos na base.' })
                // const gato = {
                //     "id": cat.id,
                //     "name": cat.name,
                //     "origin": cat.origin,
                //     "description": cat.description,
                //     "temperament": cat.temperament,
                //     "imageId": cat.reference_image_id
                // }
                // server.post(baseUrlCats, gato)
                //     .then( res => {
                //         console.log("Gatos Registrados");
                //     }).catch( err => {
                //         console.log(err)
                //         return res.status(400).send({ error: 'Error updating new project' });
                //     });
        }
    } catch (error) {
        res.send({ error: error.message })
    }
});

server.listen(4004);