import { Model, DataTypes } from 'sequelize'
import bcryptjs from 'bcryptjs';

export default class User extends Model {
    static init(sequelize) { // Aqui, sequelize representa a conexão. sequelize = connection.
        super.init({ // super.init chama o metodo init() de dentro da classe Model
            name: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [2, 255],
                        msg: 'Nome deve ter entre 2 e 255 caracteres'
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'Email invalido'
                    }
                }
            },
            password_hash: {
                type: DataTypes.STRING,
                defaultValue: '',

            },
            password: {
                type: DataTypes.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 50],
                        msg: 'Senha deve ter entre 6 e 50 caracteres'
                    }
                }
            },
        }, {
            // Nesse novo objeto passamos a conexão com o banco de dados
            sequelize
        })

        this.addHook('beforeSave', async user => {
            user.password_hash = await bcryptjs.hash(user.password)
        })
    }

}