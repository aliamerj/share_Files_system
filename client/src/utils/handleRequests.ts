import {
  ResponseUploading,
  UploadData,
  GetfileInfo,
  DownloadFile,
  VerfiyDownload,
} from "../Types/types";
import { userRequest } from "./requestMethods";
type SetFileUploadHelper = (data: ResponseUploading) => void;

export const uploadHandler = async (
  data: UploadData,
  setFileHelper: SetFileUploadHelper
) => {
  let formData = new FormData();
  formData.append("file", data.files[0]);
  formData.append("password", data.password);
  const res = await userRequest.post<ResponseUploading>(
    "/upload/file",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  setFileHelper(res.data);
};

// download file info
export const getFileInfo = async (id: string) => {
  return await userRequest.get<GetfileInfo>(`/download/${id}`);
};

// download file
export const downloadUnProtectedFile = async (id: string) => {
  const res = await userRequest.get(`/download/file/${id}`);
  if (res.status === 200) {
    window.open(`http://localhost:5000/download/file/${id}`, "_blank");
  }
  return res;
};

// download protectedFile
export const downloadProtectedFile = async (
  id: string,
  { password }: { password: string }
) => {
  const res = await userRequest.post<VerfiyDownload>(`/download/file/${id}`, {
    password,
  });
  if (res.status === 200 && res.data?.name) {
    const { name, path, secretKey } = res.data;
    console.log(
      `http://localhost:5000/download/file/${secretKey}/${name}/${path}`
    );
    window.open(
      `http://localhost:5000/download/file/${secretKey}/${name}/${path}`
    );
  }
  return res;
};
