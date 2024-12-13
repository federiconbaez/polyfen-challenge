import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { CONFIG, API_ROUTES } from './config.js';
import { prospectRouter } from './routes/prospects.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors({ origin: CONFIG.CORS_ORIGIN }));
app.use(express.json());

mongoose.connect(CONFIG.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.use(API_ROUTES.PROSPECTS, prospectRouter);

app.use(errorHandler);

app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on port ${CONFIG.PORT}`);
});
