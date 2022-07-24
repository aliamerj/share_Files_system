import {
  ContainerStyle,
  TextareaStyle,
  TitleStyle,
} from "../../../styles/content.style/upload.style/fileInfo";
import { ResponseUploading } from "../../../Types/types";

const FileInfo = ({ fileData }: { fileData: ResponseUploading }) => {
  return (
    <ContainerStyle>
      <TitleStyle>Your Download Link Below</TitleStyle>
      <TextareaStyle readOnly value={fileData.fileLink} />
    </ContainerStyle>
  );
};

export default FileInfo;
