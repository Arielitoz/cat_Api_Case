const axios = require('axios');

/**
 * Id: 1 => Hats/ Chapéus
 * Id: 4 => Sunglasses/ Óculos
 */

const apiImage = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/"
});

module.exports = apiImage;