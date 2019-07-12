let persona = {
    nombre: 'Diego',
    apellido: 'Pastoriza',
    verga: 'gigante',
    getnombre() {
        return `${this.nombre} ${this.apellido} - verga: ${this.verga}`;
    }
};

console.log(persona.getnombre());

//destructuring 
//tomo 3 parametros del objeto persona.. a nombre le cambio el identificador de la variable.
let { nombre: primerNombre, apellido, verga } = persona;

console.log(primerNombre, apellido, verga);