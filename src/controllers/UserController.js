import User from '../models/UserModel.js'

class UserController {

    async index(req, res) {
        const users = await User.findAll();
        res.json({ users });
    }

    async store(req, res) {
        const { name, email } = await req.body;
        console.log(name, email);
        const user = await User.create({ name, email });

        return res.json({ user });
    }
    async show(req, res) {
        console.log(req.param);
        const user = await User.findByPk(req.params.id);

        res.json({ user });

    }
    async delete(req, res) {
        const user = await User.findByPk(req.params.id);
        user.destroy();

        res.json({ destroy: true });
    }
}

export default new UserController();