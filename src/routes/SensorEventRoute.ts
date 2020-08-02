import { Router } from 'express';
import getSensorsEvents from '@controllers/sensor-events/getAll';
import addSensorEvent from '@controllers/sensor-events/addSensorEvent';

const SensorEventRoute = Router();

SensorEventRoute.get('/', getSensorsEvents)
  .post('/', addSensorEvent);

export default SensorEventRoute;
