import { Router } from "express";
import { uploadFile } from "./upload.controller";
import upload from "../../middleware/uploads.middleware";

const route = Router();

route.post("/file", upload.single("file"), uploadFile);

export default route;
