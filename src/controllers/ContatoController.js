import Contato from '../models/ContatoModel.js'

class ContatoController {

    async index(req, res) {
        const contatos = await Contato.findAll();
        res.json({ contatos });
    }

    async store(req, res) {
        const { name, email } = await req.body;
        console.log(name, email);
        const contato = await Contato.create({ name, email });

        return res.json({ contato });
    }
    async show(req, res) {
        console.log(req.param);
        const contato = await Contato.findByPk(req.params.id);

        res.json({ contato });

    }
    async delete(req, res) {
        const contato = await Contato.findByPk(req.params.id);
        contato.destroy();

        res.json({ destroy: true });
    }
}

export default new ContatoController();