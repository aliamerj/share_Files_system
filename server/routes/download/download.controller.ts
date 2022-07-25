import { NextFunction, Request, Response } from "express";
import { DownloadFile, File, FileDB } from "../../Types/types";
import FileModule from "../../modules/File.module";
import { compare } from "bcrypt";
import createError from "http-errors";
import { join } from "path";
import jwt from "jsonwebtoken";

export const verfiyDownloadProtected = async (req: Request, res: Response) => {
  const file: FileDB | null = await FileModule.findById(req.params.id);

  if (!file) {
    return res.status(404).json({
      message: "FILE NOT FOUND",
      success: false,
    });
  }
  if (!file.password) {
    return res.status(401).json({
      message: "File is protected you can't download it",
      success: false,
    });
  }

  const validPassword = await compare(req.body.password, file.password);
  if (!validPassword) {
    return res.status(400).json({
      message: "Incorrect password ",
      success: false,
    });
  }
  file.downloadCount++;
  file.save();
  if (process.env.jwt_secret) {
    const pathFile = file.path.split("\\")[1];
    const key = jwt.sign(
      { name: file.originalname, path: pathFile },
      process.env.jwt_secret,
      { expiresIn: 30 }
    );

    return res.status(200).json({
      secretKey: key,
      path: file.path.split("\\")[1],
      name: file.originalname,
    });
  }
};
export const downloadProtectedFile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { path, name } = req.params;
  res.download(join("uploads", path), name, (err: any) => {
    if (err) {
      if (err.statusCode === 404) {
        next(
          createError(404, {
            message: {
              name: "File_Deleted",
              message: "File Has been deleted",
              success: false,
            },
          })
        );
      }
      next(
        createError(500, {
          message: {
            message: "Download File Failed",
            success: false,
          },
        })
      );
    }
  });
};

export const downloadUnprotectedFile = async (req: Request, res: Response) => {
  const file: FileDB | null = await FileModule.findById(req.params.id);
  if (!file) {
    return res.status(404).json({
      message: "FILE NOT FOUND",
      success: false,
    });
  }
  if (!file.password) {
    downloadFile(res, file);
    return;
  }
  return res.status(401).json({
    message: "File is protected",
    success: false,
  });
};
export const getFileInfo = async (req: Request, res: Response) => {
  let protectedFile: boolean;
  const id = req.params.id;
  FileModule.findById<File | null>(id)
    .then((fileInfo) => {
      if (!fileInfo) throw new Error("NOT FOUND");
      fileInfo.password ? (protectedFile = true) : (protectedFile = false);
      return res.status(200).json({
        name: fileInfo.originalname,
        success: true,
        message: "file found successfully",
        protectedFile,
        downloadCount: fileInfo.downloadCount,
      });
    })
    .catch(() =>
      res.status(404).json({
        success: false,
        message: "NOT FOUND FILE",
      })
    );
};
const downloadFile = (res: Response, file: FileDB) => {
  res.status(200).download(file.path, file.originalname, async (err: any) => {
    if (!err) {
      file.downloadCount += 0.5;
      await file.save();
    }
    if (err) {
      if (err.statusCode === 404) {
        return res.status(404).json({
          message: "File Has been deleted",
          success: false,
        });
      }

      return res.status(500).json({
        message: "Download File Failed",
        success: false,
      });
    }
  });
};

// .json({
//   message: "download success",
//   success: true,
// })
