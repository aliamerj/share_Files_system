import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import config from "./start/config";
import db from "./start/db";
import routes from "./start/routes";

dotenv.config();

config();
db();

const ClIENT_URL = process.env.ClIENT_URL as string;
const app = express();
app.use(helmet());
app.use(cors({ origin: ClIENT_URL, credentials: true }));

routes(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
export default server;
