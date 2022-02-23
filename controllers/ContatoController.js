import connMySQL from '../database.js'
connMySQL.connect()


class ContatoController {
    async index(req, res) {

        connMySQL.

        res.send({ tudook: 'sim' })

    }

}

export default new ContatoController();