import { Request, Response } from 'express';
import SensorEventDao from '@daos/SensorEvent';
import { handleResErrors } from 'src/utils/Responses';

export default function getAllSensorEventsBySensorId(
  req: Request,
  res: Response
): void | Response<any> {
  const { id } = req.params;

  if (!id) return res.sendStatus(404);

  SensorEventDao.getAllById(id)
    .then((docs) => res.status(200).json(docs))
    .catch((err) => handleResErrors(err, () => res.sendStatus(500)));
}
