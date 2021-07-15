const { Router } = require('express');
const { usuariosGet } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/', usuariosPut);

router.put('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

module.exports = router;