import { Response } from 'express';
import logger from './Logger';

export function handleResErrors(err: unknown, cb: () => Response): Response {
  logger.error(err);
  return cb();
}
