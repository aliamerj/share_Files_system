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
  } else if (err.status === 404) {
    res.status(404).json(`not found page :(`);
  } else
    res
      .status(500)
      .json(`Sorry, something went wrong. please try agan later. `);
};

export default errorMiddleware;
