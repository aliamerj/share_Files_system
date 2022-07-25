import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
interface JwtData extends JwtPayload {
  name?: string;
  path?: string;
  iat?: number;
  exp?: number;
}

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const key = req.params.key;
  if (process.env.jwt_secret && key) {
    jwt.verify(key, process.env.jwt_secret, (err, data) => {
      if (err)
        return next(
          createHttpError(403, {
            message: {
              name: "Invalidtocken",
              message: "File is protected",
              success: false,
            },
          })
        );
      const decode = data as JwtData;
      if (decode.name === req.params.name && decode.path === req.params.path) {
        next();
      } else {
        return next(
          createHttpError(403, {
            message: {
              name: "Invalidtocken",
              message: "File is protected",
              success: false,
            },
          })
        );
      }
    });
  }
  if (!key) {
    return next(
      createHttpError(401, {
        message: {
          name: "NoKeyPrevided",
          message: "File is protected",
          success: false,
        },
      })
    );
  }
};
