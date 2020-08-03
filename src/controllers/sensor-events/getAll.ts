import { Request, Response } from 'express';
import SensorEventDao from '@daos/SensorEvent';
import { handleResErrors } from 'src/utils/Responses';

export default function getAllSensorEvents(req: Request, res: Response): void {
  SensorEventDao.listAndPopulate()
    .then((docs) => res.status(200).json(docs))
    .catch((err) => handleResErrors(err, () => res.sendStatus(500)));
}
