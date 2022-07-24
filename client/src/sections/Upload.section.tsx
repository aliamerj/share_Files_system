import {
  CenterStyle,
  ContainerFormStyle,
  LeftStyle,
  LineStyle,
  RightStyle,
  WrapperStyle,
} from "../styles/content.style/upload.style/form.style";
import UploadForm from "../components/content/upload/Upload.form";
import FileInfo from "../components/content/upload/FileInfo";
import { ResponseUploading } from "../Types/types";
import { useState } from "react";
import DefaultFileInfo from "../components/content/upload/DefaultFileInfo";

const UploadSection = () => {
  const [fileData, setFileData] = useState<ResponseUploading | null>(null);
  const setFileDataHelper = (data: ResponseUploading) => {
    setFileData(data);
  };
  return (
    <ContainerFormStyle>
      <WrapperStyle>
        <LeftStyle>
          {fileData ? <FileInfo fileData={fileData} /> : <DefaultFileInfo />}
        </LeftStyle>
        <CenterStyle>
          <LineStyle />
        </CenterStyle>
        <RightStyle>
          <UploadForm
            fileData={fileData}
            setFileDataHelper={setFileDataHelper}
          />
        </RightStyle>
      </WrapperStyle>
    </ContainerFormStyle>
  );
};

export default UploadSection;
