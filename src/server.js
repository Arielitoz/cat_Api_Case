const api = require('./api/req-base-races');
const apiImage = require('./api/req-image');
const express = require("express");
const database = require('../backend/db.json')
const axios = require('axios');

const server = express();

const baseUrlCats = "http://localhost:3001/cats";
const baseUrlCatsHats =  "http://localhost:3001/imageHats";
const baseUrlCatsSun = "http://localhost:3001/imageSunglasses";

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

server.get("/image-cat/:id", async (req, res) => {
    
    try {

        const id = req.params.id;

        const { data } = await apiImage.get(`search?category_ids=${id}`);
        console.log(data)
        console.log(data[0].url)
        if ( id == 1) {
           
            axios.post(baseUrlCatsHats, {
                id: data[0].id,
                url: data[0].url      
            })
            return res.status(201).send({ message: 'Base de Imagens de gatos com chapéus atualizada' });
        } else if ( id == 4) {
            axios.post(baseUrlCatsSun, {
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

    
        // if (database.cats.length === 0) {
        //     data.forEach(cat => {
        //         axios.post(baseUrlCats, {
        //             id: cat.id,
        //             name: cat.name,
        //             origin: cat.origin,
        //             description: cat.description,
        //             temperament: cat.temperament,
        //             imageId: cat.reference_image_id
        //         })
        //     });
        //     return res.status(201).send({ message: 'Base Atualizada' });
        // } else {
        //     return res.status(200).send(database.cats);
        // }

});

server.listen(4004);