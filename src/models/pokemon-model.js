import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    name: String,
    height: Number,
    weight: Number,
    types: [String],
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Pokemon', PokemonSchema);