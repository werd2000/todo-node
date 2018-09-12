const fs = require('fs');

let listaTodo = [];

const guardarDb = () => {
    let data = JSON.stringify(listaTodo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDb = () => {
    try {
        listaTodo = require('../db/data.json');
    } catch (error) {
        listaTodo = [];
    }
}

const crear = (nombre) => {

    cargarDb();

    let todo = {
        nombre,
        completado: false
    };

    listaTodo.push(todo);

    guardarDb();

    return todo

}

const getListado = () => {
    cargarDb();
    return listaTodo;
}

const actualizar = (nombre, completado = true) => {
    cargarDb();
    let index = listaTodo.findIndex(tarea => tarea.nombre === nombre);
    if (index >= 0) {
        listaTodo[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const eliminar = (nombre) => {
    cargarDb();
    let index = listaTodo.findIndex(tarea => tarea.nombre === nombre);
    if (index >= 0) {
        listaTodo.splice(index, 1);
        guardarDb();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}