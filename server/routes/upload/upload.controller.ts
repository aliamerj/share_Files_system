import { Request, Response } from "express";
import _ from "lodash";
import { hash } from "bcrypt";
import { File, UploadFile } from "../../Types/types";
import FileModule from "../../modules/File.module";

type UploadFileFunction = (
  req: Request,
  res: Response
) => Promise<Response<UploadFile>>;

export const uploadFile: UploadFileFunction = async (req, res) => {
  const { path, originalname } = _.pick(req.file, ["path", "originalname"]);
  if (!path || !originalname) {
    return res.status(400).json({
      message: `can not upload this file `,
      success: false,
      fileLink: null,
    });
  }
  const fileData: File = {
    path,
    originalname,
    downloadCount: 0,
  };
  const { password } = _.pick(req.body, ["password"]);
  if (password && password !== "") {
    fileData.password = await hash(password, 10);
  }
  const file = await FileModule.create(fileData);
  const fileLink = `${req.headers.origin}/file/${file._id}`;
  return res.status(200).json({
    message: `${file.originalname} successfully uploaded `,
    success: true,
    fileLink,
  });
};
