import PokemonModel from '../models/pokemon-model.js';
import { nanoid } from 'nanoid'

function postPokemon(req, res) {
  const poke = {...req.body, id: nanoid()};
  const newPoke = new PokemonModel(poke);
  newPoke.save()
    .then((savedPoke) => {
      res.status(201).json(savedPoke);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to save Pokemon', details: error });
    });
};

function getPokemon(req, res) {
  const { id } = req.params;
  PokemonModel.findOne(id)
    .then(doc => {
      doc ? res.status(200).json(doc) : res.status(404).json({ error: 'Pokemon not found' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch Pokemon list', details: error });
    });
}

function getPokemonList(req, res) {
  const { limit, skip } = req.query;
  const pageLimit = Number(limit) || 10;
  const pageSkip = Number(skip) || 0;
  Promise.all([
    PokemonModel.find().skip(pageSkip).limit(pageLimit).sort({ updatedAt: -1 }),
    PokemonModel.countDocuments()
  ])
    .then(([pokeList, count]) => {
      res.status(200).json({
        count,
        results: pokeList
      });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch Pokemon list', details: error });
    });
}

export {
  postPokemon,
  getPokemon,
  getPokemonList
};