import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.code === 11000) {
    res
      .status(400)
      .json("The email address is already associated with another Account");
  } else if (err.name === "CastError") {
    res.status(404).redirect("http://localhost:3000/file/" + err.value);
  } else if (err.status === 404) {
    res.status(404).redirect("http://localhost:3000/file/files");
  } else
    res
      .status(500)
      .json(
        err.message ?? `Sorry, something went wrong. please try agan later. `
      );
};

export default errorMiddleware;
