setTimeout(() => {
    console.log('esto es un callback')
}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Diego',
        id
    }
    if (id === 20) {
        callback(`el usuario con id ${id}, no existe`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
})