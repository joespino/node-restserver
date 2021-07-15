const express = require('express')

class Server {
    constructor() {
        this.app = express();

        this.routes();
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.send('hello world')
        });
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }
}

module.exports = Server;