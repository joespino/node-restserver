const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get Api - controlador'
    });
}

const usuariosPost = (req, res = response) => {
    res.json({
        msg: 'get Api - controlador'
    });
}

const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'get Api - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'get Api - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'get Api - controlador'
    });
}

module.exports = {
    usuariosGet
}