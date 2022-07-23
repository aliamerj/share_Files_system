import mongoose from "mongoose";
import { File } from "../Types/types";

const FileSchema = new mongoose.Schema<File>(
  {
    path: {
      type: String,
      required: true,
    },
    originalname: {
      type: String,
      required: true,
    },
    downloadCount: {
      type: Number,
      required: true,
      default: 0,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<File>("File", FileSchema);
