import { Router } from 'express';
import pokemonCtrl from '../controllers/pokemon-ctrl.js';
import { paramListMid, pokeMid } from '../middlewares/poke-mid.js';

const router = Router();

router.post('/', pokeMid, pokemonCtrl.postPokemon);
router.get('/', paramListMid, pokemonCtrl.getPokemonList);

export default router;
