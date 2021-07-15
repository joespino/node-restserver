const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        msg: 'get API'
    });
});

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