import { Router } from 'express';
import ContatoController from '../controllers/ContatoController.js';

const router = new Router();

router.get('/', ContatoController.index);
router.get('/:id', ContatoController.show);
router.post('/', ContatoController.store);
router.delete('/:id', ContatoController.delete);

export default router;