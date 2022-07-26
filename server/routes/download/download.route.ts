import { Router } from "express";
import { checkAuth } from "../../middleware/auth.middleware";
import {
  downloadProtectedFile,
  downloadUnprotectedFile,
  verfiyDownloadProtected,
  getFileInfo,
} from "./download.controller";

const route = Router();

route.get("/:id", getFileInfo);
route.get("/file/:id", downloadUnprotectedFile);
route.post("/file/:id", verfiyDownloadProtected);
route.get("/file/:key/:name/:path/:fileId", [checkAuth, downloadProtectedFile]);

export default route;
