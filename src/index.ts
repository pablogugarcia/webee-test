/* eslint-disable import/extensions */
import './LoadEnv'; // Must be the first import

import app from '@server';
// import Sensor from '@entities/Sensor.schema';
import { connectDB } from './config';
import logger from './utils/Logger';
import SensorRouter from './routes/SensorRoute';
import SensorEventRouter from './routes/SensorEventRoute';
import AuthRouter from './routes/Auth';
import { tokenVerify } from './middlewares/auth';

// Connect database
connectDB()
  .then(() => {
    logger.info('Successfully connected to database', { error: ' some eror' });
  })
  .catch((err) => {
    logger.error('failed to connect database, error: ', err);
    process.exit(1);
  });

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  logger.info(`Express server started on port: ${port}`);
});

// test sensor model and db
// Sensor.create({
//   name: 'test',
//   location: { type: 'Point', coordinates: [40, 5] },
//   active: true,
//   minval: 0,
//   maxval: 10,
// });
app.use('/auth', AuthRouter);
app.use(tokenVerify);
app.use('/sensors', SensorRouter);
app.use('/sensor-events', SensorEventRouter);
