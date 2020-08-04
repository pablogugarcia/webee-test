import { Router } from 'express';
import getSensorsEvents from '@controllers/sensor-events/getAll';
import addSensorEvent from '@controllers/sensor-events/addSensorEvent';
import getAllSensorEventsBySensorId from '@controllers/sensor-events/getById';

const SensorEventRoute = Router();

SensorEventRoute.get('/', getSensorsEvents)
  .get('/:id', getAllSensorEventsBySensorId)
  .post('/', addSensorEvent);

export default SensorEventRoute;
