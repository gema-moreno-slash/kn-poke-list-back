import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model('Pokemon', PokemonSchema);