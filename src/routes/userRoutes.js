import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const router = new Router();

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.store);
router.delete('/:id', UserController.delete);

export default router;