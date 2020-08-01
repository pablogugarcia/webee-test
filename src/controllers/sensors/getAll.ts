import { Request, Response } from 'express';
import SensorDao from '@daos/Sensor';
import { handleResErrors } from 'src/utils/Responses';

export default function getSensors(req: Request, res: Response): void {
  SensorDao.list()
    .then((sensors) => res.status(200).json(sensors))
    .catch((err) =>
      handleResErrors(err, () =>
        res.status(500).json({
          errors: {
            name: 'Internal Server Error',
          },
        })));
}
