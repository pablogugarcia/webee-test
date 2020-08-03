import SensorDao from '@daos/Sensor';
import { Request, Response } from 'express';
import { handleResErrors } from 'src/utils/Responses';
import { SensorEntity } from '@models/Sensor.model';

export default function updateSensor(req: Request, res: Response): void {
  const {
    id,
    active,
    location,
    maxval,
    minval,
    name,
  } = req.body as SensorEntity & { id: string };

  SensorDao.updateOne(id, {
    active,
    location,
    maxval,
    minval,
    name,
  })
    .then((doc) => res.status(200).json(doc))
    .catch((err) => handleResErrors(err, () => res.sendStatus(500)));
}
