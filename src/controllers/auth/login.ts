import { handleResErrors } from 'src/utils/Responses';
import { Request, Response } from 'express';
import { makeDemoAuth } from '../../services/auth';

export default function loginUser(req: Request, res: Response): void {
  const { username, password } = req.body;

  makeDemoAuth({ username, password }).then(
    (token) => res.status(200).json({ token }),
  ).catch(
    (err) => handleResErrors(err, () => res.status(400).send(err.message)),
  );
}
