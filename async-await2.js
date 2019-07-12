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


let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe empleado con el id: ${id}`);
    } else {
        return (empleadoDB);
    }
}


let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`El empleado con id: ${empleado.id} no posee salario`);
    } else {
        let respuesta = {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
        return (respuesta);
    }
}


let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    console.log(empleado);
    let salario = await getSalario(empleado);
    console.log(salario);
}

getInformacion(1)
    .then(msj => console.log(msj))
    .catch(err => console.log(err));