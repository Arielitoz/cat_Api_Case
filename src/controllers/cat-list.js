const express = require("express");
const router = express.Router();
const database = require('../../backend/db.json')
const axios = require('axios');
const url = require('../environment/url.json');

router.get('/list-races', (req, res) => {
    
    try {
        const { data } = axios.get(url.baseUrlCats);
        
        return res.status(200).send(database.cats);
    } catch (error) {
        return res.status(404).send({ message: error });
    }

});

router.get('/race/:id', (req, res) => {
    
    try {
        const id = req.params.id;
        const {data} = axios.get(url.baseUrlCats);
        const info = database.cats;

        let cat = info.filter((item) => {
            return (item.id) == id;
        });

        if (id < 1 || id > 67) {
            return res.status(404).send({ message: 'Adasd' });
        }
        
        return res.status(200).send(cat);
    } catch (error) {
        return res.status(404).send({ message: error });
    }

});



module.exports = router;