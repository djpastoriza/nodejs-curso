
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const {argv} = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base,argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base,argv.limite).then(archivo => {
            console.log(`Archivo creado ${colors.rainbow(archivo)}`);
            
        }).catch( error => {
            console.log(error);
        }) 
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


let argv2 = process.argv;
//node app --base=6



