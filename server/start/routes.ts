import express, { Application, NextFunction } from "express";
import createError from "http-errors";
import errorMiddleware from "../middleware/error.middleware";
import uploadRoute from "../routes/upload/upload.route";
import downloadRoute from "../routes/download/download.route";

export default function (app: Application) {
  app.use(express.json());

  app.use("/upload", uploadRoute);
  app.use("/download", downloadRoute);
  app.use((_req, _res, next: NextFunction) => {
    next(
      createError(404, {
        name: "NotFoundPage",
        message: "Not Found Page",
        success: false,
      })
    );
  });
  app.use(errorMiddleware);
}
