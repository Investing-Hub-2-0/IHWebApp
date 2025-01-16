const axios = require("axios").default;

const API_URL = process.env.REACT_APP_API_URL;

const getCryptoList = async () => {
    console.log(API_URL);
    return await axios.get(`${API_URL}/crypto/list`);
}

module.exports = { getCryptoList }