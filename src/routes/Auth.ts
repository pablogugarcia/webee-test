import { Router } from 'express';
import loginUser from '@controllers/auth/login';

const AuthRouter = Router();

AuthRouter.post('/', loginUser);

export default AuthRouter;
