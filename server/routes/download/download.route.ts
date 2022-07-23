import { Router } from "express";
import { downloadFile } from "./download.controller";

const route = Router();

route.get("/file/:id", downloadFile);
route.post("/file/:id", downloadFile);

export default route;
