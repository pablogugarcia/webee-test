import { Request, Response } from 'express';
import SensorDao from '@daos/Sensor';
import { handleResErrors } from 'src/utils/Responses';

export default function removeSensor(req: Request, res: Response): void {
  const { id } = req.body;

  SensorDao.removeOne(id)
    .then(() => res.sendStatus(200))
    .catch((err) =>
      handleResErrors(err, () =>
        res.status(500).json({
          errors: 'Internal server error',
        })));
}
