let empleados = [{
        id: 1,
        nombre: 'diego',
    },
    {
        id: 2,
        nombre: 'giuli'
    },
    {
        id: 3,
        nombre: 'mabel'
    },

];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`No existe empleado con el id: ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`El empleado con id: ${empleado.id} no posee salario`);
    } else {
        let respuesta = {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
        callback(null, respuesta);
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(resp);
        }
    })

});