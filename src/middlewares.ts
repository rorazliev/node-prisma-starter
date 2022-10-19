import type { ErrorRequestHandler, RequestHandler } from 'express';
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {void}
 */
export const notFound: RequestHandler = (req, res, next) => {
  res.status(404);
  next(new Error('Not Found'));
};
/**
 *
 * @param {any} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {void}
 */
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.statusCode !== 200 ? res.statusCode : 500);
  res.json({
    message: err.message,
  });
};
