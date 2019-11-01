
const fs = require('fs');

let crearArchivo = (base) => {

    return new Promise( (resolve,reject) => {
        if(!Number(base)){
            reject('El valor introducido no es un numero');
            return;
        }
        let data = '';
        for (let index = 1; index <= 10; index++) {
            cuenta = base * index;
            data += `${base} * ${index} = ${cuenta}\n`;
        }

        fs.writeFile(`tablas/tabla-multiplicar-${base}.txt`,data,(err)=> {
            if(err){
                reject(err)
            }else{
                resolve(`tabla-multiplicar-${base}.txt`);
            }
        })


    })

}

module.exports = {
    crearArchivo
}

