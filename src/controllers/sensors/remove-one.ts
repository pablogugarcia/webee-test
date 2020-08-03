import { Request, Response } from 'express';
import SensorDao from '@daos/Sensor';
import { handleResErrors } from 'src/utils/Responses';

export default function removeSensor(req: Request, res: Response): void {
  const { id } = req.params;

  SensorDao.removeOne(id)
    .then((doc) => res.status(200).json(doc))
    .catch((err) =>
      handleResErrors(err, () =>
        res.status(500).json({
          errors: 'Internal server error',
        })));
}
