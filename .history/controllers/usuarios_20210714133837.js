const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get Api'
    });
}