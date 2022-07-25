export interface UploadData {
  password: string;
  files: File[];
}
export interface ResponseUploading {
  fileLink: string;
  message: string;
  success: boolean;
}
export interface DownloadForm {
  password: string;
}
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

export interface VerfiyDownload extends DownloadFile {
  secretKey?: string;
  path?: string;
  name?: string;
}
