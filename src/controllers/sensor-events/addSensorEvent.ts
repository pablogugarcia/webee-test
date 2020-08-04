import { Request, Response } from 'express';
import SensorEventDao from '@daos/SensorEvent';
import { handleResErrors } from 'src/utils/Responses';

export default function addSensorEvent(req: Request, res: Response): void | Response<any> {
  const { id, value } = req.body;

  if(!id || !value) return res.sendStatus(400)

  SensorEventDao.create({
    sensorId: id,
    value,
  })
    .then((doc) => res.status(200).json(doc))
    .catch((err) =>
      handleResErrors(err, () => res.sendStatus(500)));
}
