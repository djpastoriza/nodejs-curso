const options = {
    base:{
        demand:true,// obligatorio
        alias:'b'
    }, 
    limite:{
        default:10,
        alias:'l'
    }
}
const argv = require('yargs')
      .command('listar','Imprime en consola la tabla de multiplicar',options) 
      .command('crear','Genera un archivo nuevo',options)
      .help()
      .argv;

module.exports = {
    argv
}