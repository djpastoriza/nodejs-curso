const {argv} = require('./yargs');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async (direccion) => {
    try {
        const l = await lugar.getLugarLongLat(direccion).catch('El lugar No existe');
        const c = await clima.getClima(l.lat,l.lng);
        return `La temperatura en ${direccion} es ${c}`;
    } catch (error) {
        return 'No se puedo determinar el clima de ' + direccion;
    }
}

getInfo(argv.direccion).then(resp => {
    console.log(resp);
});