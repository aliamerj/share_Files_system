import { NextFunction, Request, Response } from "express";
import { DownloadFile, File, FileDB } from "../../Types/types";
import fs from "fs";
import FileModule from "../../modules/File.module";
import { compare } from "bcrypt";
import createError from "http-errors";
import { join } from "path";
import jwt from "jsonwebtoken";

export const verfiyDownloadProtected = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const file: FileDB | null = await FileModule.findById(req.params.id);

  if (!file) {
    return next(
      createError(404, {
        name: "NotFoundFile",
        message: "File Not Found",
        success: false,
      })
    );
  }
  if (!file.password) {
    return next(
      createError(401, {
        name: "FileProtected",
        message: "File is protected you can't download it",
        success: false,
      })
    );
  }

  const validPassword = await compare(req.body.password, file.password);
  if (!validPassword) {
    return next(
      createError(400, {
        name: "InvalidPassword",
        message: "Incorrect password ",
        success: false,
      })
    );
  }
  if (!fs.existsSync(file.path)) {
    return next(
      createError(404, {
        name: "FileDeleted",
        message: "File Has been deleted",
        success: false,
      })
    );
  }

  file.downloadCount++;
  file.save();
  if (process.env.jwt_secret) {
    const pathFile = file.path.split("/")[1];
    const key = jwt.sign(
      { name: file.originalname, path: pathFile },
      process.env.jwt_secret,
      { expiresIn: 300000 }
    );

    return res.status(200).json({
      secretKey: key,
      path: pathFile,
      name: file.originalname,
      fileId: file._id,
    });
  }
};
export const downloadProtectedFile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { path, name } = req.params;
  console.log("Downloading protected file: ", req.params);
  res.download(join("uploads", path), name, (err: any) => {
    if (err) {
      if (err.statusCode === 404) {
        return next(
          createError(404, {
            name: "FileDeletedOnOpen",
            message: "File Has been deleted",
            success: false,
          })
        );
      }
      return next(
        createError(500, {
          name: "DownloadFialed",
          message: "Download File Failed",
          success: false,
        })
      );
    }
  });
};

export const downloadUnprotectedFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const file: FileDB | null = await FileModule.findById(req.params.id);
  if (!file) {
    return next(
      createError(404, {
        name: "NotFoundFile",
        message: "File Not Found",
        success: false,
      })
    );
  }
  if (!file.password) {
    file.downloadCount += 0.5;
    downloadFile(res, file, next);
    return;
  }
  return next(
    createError(401, {
      name: "FileProtected",
      message: "File is protected",
      success: false,
    })
  );
};

export const getFileInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let protectedFile: boolean;
  const id = req.params.id;
  if (!id) {
    next(
      createError(404, {
        name: "NotFoundFile",
        message: "File Not Found",
        success: false,
      })
    );
  }
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
      next(
        createError(404, {
          name: "NotFoundFile",
          message: "File Not Found",
          success: false,
        })
      )
    );
};
const downloadFile = (res: Response, file: FileDB, next: NextFunction) => {
  res.status(200).download(file.path, file.originalname, async (err: any) => {
    if (!err) {
      await file.save();
    }
    if (err) {
      if (err.statusCode === 404) {
        return next(
          createError(404, {
            name: "FileDeleted",
            message: "File Has been deleted",
            success: false,
          })
        );
      }

      return next(
        createError(500, {
          name: "DownloadFialed",
          message: "Download File Failed",
          success: false,
        })
      );
    }
  });
};
