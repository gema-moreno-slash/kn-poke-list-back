import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './src/routes/index.js';
import mongoose from 'mongoose';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://kn_db_user:GggIlLt55xMVnibn@kn-db.owiuf76.mongodb.net/?appName=kn-db')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

