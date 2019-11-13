
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite = 10) => {
    let data = recorrerTabla(base,limite);
    console.log(`================ tabla de ${base} =============`.green);
    console.log(data);
    console.log(`===============================================`.green);
}

let crearArchivo = (base,limite = 10) => {

    return new Promise( (resolve,reject) => {
        if(!Number(base)){
            reject('El valor introducido no es un numero');
            return;
        }
        let data = recorrerTabla(base,limite)

        fs.writeFile(`tablas/tabla-multiplicar-${base}-al-${limite}.txt`,data,(err)=> {
            if(err){
                reject(err)
            }else{
                resolve(`tabla-multiplicar-${base}-al-${limite}.txt`);
            }
        })


    })

}


let recorrerTabla = (base,limite) => {
    let data = '';
    for (let index = 1; index <= limite; index++) {
        cuenta = base * index;
        data += `${base} * ${index} = ${cuenta}\n`;
    }
    return data;
}


module.exports = {
    crearArchivo,
    listarTabla
}

