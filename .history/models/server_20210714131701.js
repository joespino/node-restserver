const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middleware();
        // Rutas de mi aplicacion
        this.routes();
    }

    middleware() {
        // CORS
        this.app.use(cors());
        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get API'
            });
        });

        this.app.post('/api', (req, res) => {
            res.status(201).json({
                msg: 'get API'
            });
        });

        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'get API'
            });
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'get API'
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;