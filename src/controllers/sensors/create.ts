import { Request, Response } from 'express';
import SensorDao from '@daos/Sensor';
import { handleResErrors } from 'src/utils/Responses';
import { SensorEntity } from '@models/Sensor.model';

export default function createSensor(req: Request, res: Response): void {
  const {
    active, location, maxval, minval, name,
  } = req.body as SensorEntity;

  SensorDao.create({
    active, location, maxval, minval, name,
  })
    .then((doc) => res.status(200).json(doc))
    .catch((err) => handleResErrors(err, () => res.sendStatus(500)));
}
