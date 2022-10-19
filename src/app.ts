import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler, notFound } from './middlewares';
import exampleRouter from './routes/example';

// .env
require('dotenv').config();

// Create an app
const app = express();

// Apply middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Register routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use('/api/v1', exampleRouter);

// Handle errors
app.use(notFound);
app.use(errorHandler);

export default app;
