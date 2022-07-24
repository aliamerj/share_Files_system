import { ResponseUploading, UploadData } from "../Types/types";
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
export const getFileInfo = async (id: string) => {
  // todo
};
