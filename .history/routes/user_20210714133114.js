const { Router } = require('express');

const router = Router();

router.get('/api', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.post('/api', (req, res) => {
    res.status(201).json({
        msg: 'get API'
    });
});

router.put('/api', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.delete('/api', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

module.exports = router;