import PokemonModel from '../models/pokemon-model.js';

function postPokemon(req, res) {
  const poke = req.body;
  const newPoke = new PokemonModel(poke);
  newPoke.save()
    .then((savedPoke) => {
      res.status(201).json(savedPoke);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to save Pokemon', details: error });
    });
};

export default {
  postPokemon,
};