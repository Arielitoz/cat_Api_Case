const express = require("express");
const router = express.Router();
const database = require('../../db.json');
const axios = require('axios');
const url = require('../environment/url.json');
const elastic = require('../client/elasticsearch');

router.get('/list-races', (req, res) => {
    
    try {
        const { data } = axios.get(url.baseUrlCats);
        
        return res.status(200).send(database.cats);
    } catch (error) {
        return res.status(404).send({ message: error });
    }

});

router.get('/:id', (req, res) => {
    
    try {
        const id = req.params.id;
        const {data} = axios.get(url.baseUrlCats);
        const info = database.cats;

        let cat = info.filter((item) => {
            return (item.id) == id;
        });

        if (id < 1 || id > 67) {
            return res.status(404).send({ message: 'Nenhuma raça foi atribuída a esse identificador.' });
        }

        return res.status(200).send(cat);
    } catch (error) {
        return res.status(500).send({ message: error });
    }

});

router.get('/temp/:temp', (req, res) => {
    
    try {
        const temp = req.params.temp;
        axios.get(url.baseUrlCats);
        const info = database.cats;

        let cat = info.filter((item) => {
            // let word = item.temperament.split(',');

            if (item.temperament.includes(temp)) {
                return item;
            }
        })
        return res.status(200).send(cat);
    } catch (error) {
        return res.status(404).send({ message: error });
    }

});

router.get('/origin/:origin', (req, res) => {
    
    try {
        const origin = req.params.origin;
        axios.get(url.baseUrlCats);
        const info = database.cats;

        
        let cat = info.filter((item) => {
            return (item.origin) == origin;
        });

        if (cat.length == 0) {
            return res.status(400).send({ message: 'Origem Não encontrada' });
        }
        return res.status(200).send(cat);
    } catch (error) {
        return res.status(404).send({ message: error });
    }
});

module.exports = router;