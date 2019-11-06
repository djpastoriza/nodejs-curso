const argv = require('yargs')
      .command('listar','Imprime en consola la tabla de multiplicar',{
        base:{
            demand:true,// obligatorio
            alias:'b'
        }, 
        limite:{
            default:10,
            alias:'l'
        }
      }).argv;
const {crearArchivo} = require('./multiplicar/multiplicar');




let argv2 = process.argv;
//node app --base=6
let parametro = argv[2];


console.log(argv.base);

crearArchivo(argv.base).then(archivo => {
    console.log(`Archivo creado ${archivo}`);
    
}).catch( error => {
    console.log(error);
}) 

