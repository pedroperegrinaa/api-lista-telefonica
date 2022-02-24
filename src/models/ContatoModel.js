import { Model, DataTypes } from 'sequelize'

export default class Contato extends Model {
    static init(sequelize) { // Aqui, sequelize representa a conexão. sequelize = connection.
        super.init({ // super.init chama o metodo init() de dentro da classe Model
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
        }, {
            // Nesse novo objeto passamos a conexão com o banco de dados
            sequelize
        })
    }

}