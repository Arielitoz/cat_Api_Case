const api = require('./req-base-races');
const apiImage = require('./req-image');
const express = require("express");
const router = express.Router();
const database = require('../../backend/db.json')
const axios = require('axios');
const url = require('../environment/url.json')

const baseURLcats = 'http://localhost:3001/cats';
router.get("/races", async (req, res) => {
    try {
        const { data } = await api.get('breeds');
        console.log(data.length)

        if(database.cats.length === 0) {
            for(let i = 0; i <= data.length; i++) {
                axios.post(url.baseUrlCats, {
                    name: data[i].name,
                    origin: data[i].origin,
                    description: data[i].description,
                    temperament: data[i].temperament,
                    image: data[i].image
                })
            }
            
            return res.status(201).send({ message: 'Base Atualizada' });

        } else {
            return res.status(200).send(database.cats);
        }

    } catch (error) {
        console.log(error)
        res.send({ error: error.message })
    }
});

router.get("/image-cat/:id", async (req, res) => {

    try {
        const id = req.params.id;

        const { data } = await apiImage.get(`search?category_ids=${id}`);

        console.log(data)
        console.log(data[0].url)
        if ( id == 1) {
           
            axios.post(url.baseUrlCatsHats, {
                id: data[0].id,
                url: data[0].url      
            })
            return res.status(201).send({ message: 'Base de Imagens de gatos com chapéus atualizada' });
        } else if ( id == 4) {
            axios.post(url.baseUrlCatsSun, {
                id: data[0].id,
                url: data[0].url            
            })
            return res.status(201).send({ message: 'Base de Imagens de gatos com óculos atualizada' });
        } else {
            return res.status(404).send({ message: 'Id não permitido' })
        }
    } catch (error) {
        console.log(error)
        res.send({ error: error.message })
    }

});

module.exports = router;