import jwt from 'jsonwebtoken';
import { UserCredentials } from '@models/Auth.model';

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
      },
    );
  });


  // export const JWTverify = (token: string) => {
  //   jwt.verify(token, )
  // }