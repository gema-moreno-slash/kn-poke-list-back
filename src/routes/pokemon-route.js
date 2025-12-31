import { Router } from 'express';
import pokemonCtrl from '../controllers/pokemon-ctrl.js';

const router = Router();

router.post('/', pokemonCtrl.postPokemon);

export default router;
