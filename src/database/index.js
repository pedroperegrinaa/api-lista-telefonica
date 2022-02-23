import { Sequelize } from "sequelize/types";
import dbConfig from "../config/database";

const connection = new Sequelize(dbConfig);

export default connection;