import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundFile from "../components/content/download/NotFoundFile";
import ProductedFile from "../components/content/download/ProtectedFile";
import UnproductedFile from "../components/content/download/UnprotectedFile";
import CircularProgress from "@mui/material/CircularProgress";
import {
  ContainerDownloadStyle,
  WrapperDownloadStyle,
} from "../styles/content.style/download.style/download.style";
import { GetfileInfo } from "../Types/types";
import { getFileInfo } from "../utils/handleRequests";

const DownloadSection = () => {
  const [fileInfo, setFileInfo] = useState<GetfileInfo | null>(null);
  const { fileId } = useParams();
  const [isloading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fileId &&
      getFileInfo(fileId)
        .then((data) => setFileInfo(data.data))
        .catch((e) => setFileInfo(e.response.data))
        .then(() => setIsLoading(false));
  }, [fileId]);
  return (
    <ContainerDownloadStyle>
      <WrapperDownloadStyle>
        {!isloading && fileInfo?.success && fileId ? (
          fileInfo.protectedFile ? (
            <ProductedFile fileInfo={fileInfo} id={fileId} />
          ) : (
            <UnproductedFile fileInfo={fileInfo} id={fileId} />
          )
        ) : !isloading ? (
          <NotFoundFile />
        ) : (
          <CircularProgress color="inherit" />
        )}
      </WrapperDownloadStyle>
    </ContainerDownloadStyle>
  );
};

export default DownloadSection;
