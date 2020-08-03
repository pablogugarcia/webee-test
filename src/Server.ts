import morgan from 'morgan';
import helmet from 'helmet';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}
app.use(cors());

export default app;
