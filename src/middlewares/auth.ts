import { Request, Response, NextFunction } from 'express';
import { JWTverify } from 'src/services/auth';
import { handleResErrors } from 'src/utils/Responses';

export const tokenVerify = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization;

  if (!token) res.sendStatus(401);

  JWTverify(token as string)
    .then(() => {
      next();
    })
    .catch((err) => handleResErrors(err, () => res.sendStatus(401)));
};
