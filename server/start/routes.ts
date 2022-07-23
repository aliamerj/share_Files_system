import express, { Application, NextFunction } from "express";
import createError from "http-errors";
import errorMiddleware from "../middleware/error.middleware";
import uploadRoute from "../routes/upload/upload.route";

export default function (app: Application) {
  app.use(express.json());
  app.post("/upload", uploadRoute);
  app.use((_req, _res, next: NextFunction) => {
    next(createError(404));
  });
  app.use(errorMiddleware);
}
