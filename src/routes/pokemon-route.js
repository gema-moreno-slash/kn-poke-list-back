import { Router } from 'express';
import {
    postPokemon,
    getPokemon,
    getPokemonList
} from '../controllers/pokemon-ctrl.js';
import { paramListMid, pokeMid } from '../middlewares/poke-mid.js';

const router = Router();

router.post('/', pokeMid, postPokemon);
router.get('/list', paramListMid, getPokemonList);
router.get('/:id', getPokemon);


export default router;
