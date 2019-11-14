const argv = require('yargs').options({
    direccion: {
        alias:'d',
        desc:'Nombre de ciudad para saber el clima',
        demand:true
    }
}).argv;

module.exports = {
    argv
}