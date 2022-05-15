const api = require('./api/req-base-races');
const apiImage = require('./api/req-image');
const express = require("express");
const database = require('../backend/db.json')
const axios = require('axios');

const server = express();

const baseUrlCats = "http://localhost:3001/cats";

server.use(express.json());

server.get("/races", async (req, res) => {
    try {
        const { data } = await api.get('breeds');

        if (database.cats.length === 0) {
            data.forEach(cat => {
                axios.post(baseUrlCats, {
                    id: cat.id,
                    name: cat.name,
                    origin: cat.origin,
                    description: cat.description,
                    temperament: cat.temperament,
                    imageId: cat.reference_image_id
                })
            });
            return res.status(201).send({ message: 'Base Atualizada' });
        } else {
            return res.status(200).send(database.cats);
        }

    } catch (error) {
        console.log(error)
        res.send({ error: error.message })
    }
});

server.get("/image-cat-rdn", async (req, res) => {
    try {
        const { data } = await api.get(':id');
        const id = req.params

        if (database.cats.length === 0) {
            data.forEach(cat => {
                axios.post(baseUrlCats, {
                    id: cat.id,
                    name: cat.name,
                    origin: cat.origin,
                    description: cat.description,
                    temperament: cat.temperament,
                    imageId: cat.reference_image_id
                })
            });
            return res.status(201).send({ message: 'Base Atualizada' });
        } else {
            return res.status(200).send(database.cats);
        }

    } catch (error) {
        console.log(error)
        res.send({ error: error.message })
    }
});



server.listen(4004);