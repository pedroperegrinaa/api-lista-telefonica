import express from 'express'
import contatosRoutes from "./routes/contatosRoutes.js";
import database from './database.js'

class App {
    constructor() {

        this.app = express();
        this.routes();
        this.middlewares();

        console.log('constructor');
    }
    middlewares() {
        console.log('mid');
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        console.log('routes');

        this.app.use('/', contatosRoutes);

    }

}

export default new App().app;