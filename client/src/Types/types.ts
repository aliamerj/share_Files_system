export interface UploadData {
  password: string;
  files: File[];
}
export interface ResponseUploading {
  fileLink: string;
  message: string;
  success: boolean;
}
