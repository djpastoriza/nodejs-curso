/*let getNombre = async() => {
    return 'Diego';
}*/

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Diego');
        }, 3000);
    })
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(msj => {
    console.log(msj);
}).catch(e => {
    console.log('Error de Async', e);
})