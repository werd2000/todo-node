const nombre = {
    demand: true,
    alias: 'n',
    desc: 'Nombre de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        nombre
    })
    .command('listar', 'Lista las tareas', {})
    .command('actualizar', 'Actualiza una tarea', {
        nombre,
        completado
    })
    .command('eliminar', 'Elimina una tarea', {
        nombre
    })
    .help()
    .argv;

module.exports = {
    argv
}