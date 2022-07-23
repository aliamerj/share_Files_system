import { Router } from "express";
import { uploadFile } from "./upload.controller";
import upload from "../../middleware/uploads.middleware";
const { single } = upload;

const route = Router();

route.post("/", [single("file"), uploadFile]);

export default route;
