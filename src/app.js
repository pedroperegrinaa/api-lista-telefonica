import './database/index.js'
import express from 'express'
import contatoRoutes from "./routes/contatoRoutes.js";
import userRoutes from "./routes/userRoutes.js";


class App {
    constructor() {

        this.app = express();
        this.middlewares(); // IMPORTANT: OS MIDDLEWARES PRECISAM VIR ANTES DAS ROTAS
        this.routes();

        console.log('constructor');
    }
    middlewares() {
        console.log('mid');
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        console.log('routes');

        this.app.use('/contatos', contatoRoutes);
        this.app.use('/users', userRoutes);

    }

}

export default new App().app;