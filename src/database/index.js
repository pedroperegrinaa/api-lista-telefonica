import Sequelize from 'sequelize';
import dbConfig from "../config/database.js";

// import User from "../models/User.js"
import Contato from "../models/ContatoModel.js"

const connection = new Sequelize(dbConfig);

Contato.init(connection);