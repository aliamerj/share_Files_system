export interface File {
  path: string;
  originalname: string;
  password?: string;
  downloadCount: number;
}
export interface UploadFile {
  message: string;
  success: boolean;
  fileLink: null | string;
}
