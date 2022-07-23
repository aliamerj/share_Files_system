import { Request, Response } from "express";
import { File } from "../../Types/types";
import FileModule from "../../modules/File.module";
import { compare } from "bcrypt";

export const downloadFile = async (req: Request, res: Response) => {
  const file = await FileModule.findById<File>(req.params.id);
  if (!file) {
    return res.status(404).json({
      message: "Incorrect password ",
      success: false,
    });
  }
  if (!file.password) {
    file.downloadCount++;
    return res
      .status(200)
      .json({
        message: "download success",
        success: true,
      })
      .download(file.path, file.originalname);
  }

  const validPassword = await compare(req.body.password, file.password);
  if (!validPassword) {
    return res.status(400).json({
      message: "Incorrect password ",
      success: false,
    });
  }
};
