const {crearArchivo} = require('./multiplicar/multiplicar');


let tabla = 7;

crearArchivo('hola').then(archivo => {
    console.log(`Archivo creado ${archivo}`);
    
}).catch( error => {
    console.log(error);
}) 

