import {
  CenterStyle,
  ContainerFormStyle,
  LeftStyle,
  LineStyle,
  RightStyle,
  WrapperStyle,
} from "../styles/content.style/form.style";
import UploadForm from "../components/content/Upload.form";
import FileInfo from "../components/content/FileInfo";
import { ResponseUploading } from "../Types/types";
import { useState } from "react";

const Content = () => {
  const [fileData, setFileData] = useState<ResponseUploading | null>(null);
  const setFileDataHelper = (data: ResponseUploading) => {
    setFileData(data);
  };
  return (
    <ContainerFormStyle>
      <WrapperStyle>
        <LeftStyle>{fileData && <FileInfo fileData={fileData} />}</LeftStyle>
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

export default Content;
