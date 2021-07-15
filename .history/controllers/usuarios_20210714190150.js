const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre = 'No name', apiKey, page, limit} = req.query;

    res.json({
        msg: 'get Api - controlador',
        q,
        nombre,
        apiKey
    });
}

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post Api - controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put Api - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch Api - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}