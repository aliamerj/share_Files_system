import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt, { JwtPayload } from "jsonwebtoken";
interface JwtData extends JwtPayload {
  name: string;
  path: string;
  iat: number;
  exp: number;
}

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const key = req.params.key;
  const fileId = req.params.fileId;
  if (process.env.jwt_secret && key && fileId) {
    jwt.verify(key, process.env.jwt_secret, (err, data) => {
      if (err)
        return next(
          createHttpError(403, {
            name: "Invalidtoken",
            message: "File is protected",
            success: false,
            fileId,
          })
        );
      const decode = data as JwtData;
      if (decode.name === req.params.name && decode.path === req.params.path) {
        next();
      } else {
        return next(
          createHttpError(404, {
            name: "Invalidtoken",
            message: "File is protected",
            success: false,
            fileId,
          })
        );
      }
    });
  }
  if (!key) {
    return next(
      createHttpError(404, {
        name: "NotFoundPage",
        message: "File is protected",
        success: false,
      })
    );
  }
};
