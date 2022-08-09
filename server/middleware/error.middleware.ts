import { Request, Response, NextFunction } from "express";
const notFoundErrorsnames = ["CastError", "NotFoundPage", "FileDeletedOnOpen"];
const authErrorName = ["Invalidtoken"];

const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (notFoundErrorsnames.includes(err.name)) {
    process.env.ClIENT_URL &&
      res.status(404).redirect(process.env.ClIENT_URL + "/NOT_Found");
  } else if (authErrorName.includes(err.name)) {
    res.status(403).redirect(`${process.env.ClIENT_URL}/file/${err.fileId}`);
  } else
    res
      .status(err.status ?? 500)
      .json(
        err.message ?? `Sorry, something went wrong. please try agan later. `
      );
};

export default errorMiddleware;
