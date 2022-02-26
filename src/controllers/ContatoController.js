import Contato from '../models/ContatoModel.js'

class ContatoController {

    async index(req, res) {
        const contatos = await Contato.findAll();
        res.json(contatos);
    }

    async store(req, res) {
        const { name, email, phone } = await req.body;
        console.log(name, email, phone);
        const contato = await Contato.create({ name, email, phone });

        return res.json(contato);
    }
    async show(req, res) {
        console.log(req.param);
        const contato = await Contato.findByPk(req.params.id);

        res.json(contato);

    }
    async delete(req, res) {
        const contato = await Contato.findByPk(req.params.id);
        if (contato == null || contato == undefined) {
            return res.json({ destroy: 'Contato invalido' });
        } else {
            contato.destroy();
            res.json({ destroy: true });
        }

    }
}

export default new ContatoController();