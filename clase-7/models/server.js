const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        //Puerto
        this.port = process.env.PORT;
        //Rutas
        this.itemsPath = '/vistas'

        // Middlewares
        this.middlewares();

        // Rutas de la App
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //Lectura y parseo
        this.app.use( express.json() );

        // Directorio public
        this.app.use( express.static('public') );
    }

    routes(){
        //Rutas
        this.app.use(this.itemsPath, require('../routes/users'))
        this.app.use(this.itemsPath, require('../routes/users'))
        this.app.use(this.itemsPath, require('../routes/users'))
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`);
        });
    }
}

module.exports = Server;