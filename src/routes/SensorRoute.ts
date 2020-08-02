import { Router } from 'express';
import getSensors from '@controllers/sensors/getAll';
import removeSensor from '@controllers/sensors/remove-one';
import CreateSensor from '@controllers/sensors/create';
import updateSensor from '@controllers/sensors/update';

const SensorRouter = Router();

SensorRouter.get('/', getSensors)
  .delete('/', removeSensor)
  .post('/', CreateSensor)
  .put('/', updateSensor);

export default SensorRouter;
