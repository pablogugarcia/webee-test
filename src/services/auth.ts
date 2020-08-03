import jwt, {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
} from 'jsonwebtoken';
import { UserCredentials } from '@models/Auth.model';
import { resolve } from 'path';

function validateCredentials(credentials: UserCredentials) {
  if (credentials.username !== 'Admin') {
    return new Error('Username not found');
  }

  if (credentials.password !== 'admin123') {
    return new Error('Password incorrect');
  }
  return null;
}

export const makeDemoAuth = (user: UserCredentials): Promise<string | Error> =>
  new Promise((resolve, reject) => {
    const error = validateCredentials(user);

    if (error) reject(error);

    jwt.sign(
      { user: user.username },
      process.env.JWT_SECRET as string,
      (err: Error | null, encoded: string | undefined) => {
        if (err) {
          reject(err);
        }
        resolve(encoded);
      }
    );
  });

export const JWTverify = (token: string) => {
  return new Promise((res, rej) => {
    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      (
        err: JsonWebTokenError | NotBeforeError | TokenExpiredError | null,
        decoded: object | undefined
      ) => {
        if (err) rej(err);

        if (!decoded) rej(new Error('Error undefined decoded'));

        res(decoded);
      }
    );
  });
};
