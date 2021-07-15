const express = require('express')

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
        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.status(403).json({
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