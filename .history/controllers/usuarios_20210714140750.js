const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get Api - controlador'
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
    res.json({
        msg: 'put Api - controlador'
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