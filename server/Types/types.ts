import { Response } from "express";
import { Document } from "mongoose";

export interface File {
  path: string;
  originalname: string;
  password?: string;
  downloadCount: number;
}
export interface FileDB extends Document {
  path: string;
  originalname: string;
  password?: string;
  downloadCount: number;
}

export interface UploadFile {
  message: string;
  success: boolean;
  fileLink: null | string;
  protectedFile: boolean;
}
// URL : /download/:id
export interface GetfileInfo {
  name?: string;
  message: string;
  success: boolean;
  protectedFile?: boolean;
  downloadCount?: number;
}
export interface DownloadFile {
  message: string;
  success: boolean;
}
