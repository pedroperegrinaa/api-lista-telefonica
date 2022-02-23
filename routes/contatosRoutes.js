import { Router } from 'express'
import ContatoController from '../controllers/ContatoController.js'

const router = new Router();

router.get('/', ContatoController.index);
// router.post('/', ListaContato.store);
// router.put('/', ListaContato.update);
// router.get('/', ListaContato.delete);

export default router;