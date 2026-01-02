import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import pokemonRoute from './src/routes/pokemon-route.js';
import mongoose from 'mongoose';
import dotenvx from '@dotenvx/dotenvx'

dotenvx.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/pokemon', pokemonRoute);

app.use((req, res, next) => {
  res.status(404).json({ error: 'No encontrado' });
});
app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://kn_db_user:GggIlLt55xMVnibn@kn-db.owiuf76.mongodb.net/pokemon-db?appName=kn-db')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('💥 Database connection error:', err);
  });

