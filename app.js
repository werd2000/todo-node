const colors = require('colors');
const argv = require('./config/yargs').argv;

const todo = require('./todo/todo');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = todo.crear(argv.nombre)
        break;
    case 'listar':
        let lista = todo.getListado();
        console.log('================== Lista de tarea ==================='.green);
        for (const tarea of lista) {
            console.log(tarea.nombre);
            console.log(tarea.completado);
        }
        console.log('================ Fin Lista de tarea ================='.green);
        // console.log('Lista las tareas');
        break;
    case 'actualizar':
        let actualizado = todo.actualizar(argv.nombre, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        let eliminado = todo.eliminar(argv.nombre);
        console.log(eliminado);
        break;
    default:
        console.log('Comando no reconocido');
}