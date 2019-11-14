const axios = require('axios');


const getClima = async (lat,lng) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b88fb0556a8abc39b4d19b86cdaeaad7&units=metric`)
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}