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

function getPokemonList(req, res) {
  const { limit, skip } = req.query;
  PokemonModel.find()
    .skip(Number(skip) || 0)
    .limit(Number(limit) || 10)
    .then((pokeList) => {
      res.status(200).json(pokeList);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch Pokemon list', details: error });
    });
}

export default {
  postPokemon,
  getPokemonList
};