const express = require('express')

class Server {
    constructor() {
        this.app = express();
    }

    routes() {
        app.get('', function (req, res) {
            res.send('hello world')
        });
    }
}

module.exports = Server;