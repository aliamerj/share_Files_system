import { Alert, Button } from "@mui/material";
import {
  ContainerStyle,
  FileNameStyle,
  TitleStyle,
} from "../../../styles/content.style/download.style/unprotectedFile.style";
import DownloadIcon from "@mui/icons-material/Download";
import { GetfileInfo } from "../../../Types/types";
import { downloadUnProtectedFile } from "../../../utils/handleRequests";
import { useState } from "react";

const UnproductedFile = ({
  fileInfo,
  id,
}: {
  fileInfo: GetfileInfo;
  id: string;
}) => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [startDownload, setStartDownload] = useState<boolean>(false);
  const handleDownload = () => {
    downloadUnProtectedFile(id)
      .then((data) => {
        setStartDownload(true);
        if (data.data?.message) {
          setError(true);
          setMessage(data.data.message);
          return;
        }
        setError(false);
        setMessage("download success");
      })
      .catch((err: any) => {
        setStartDownload(true);
        setError(true);
        setMessage(err.response.data.message);
      });
  };
  return (
    <>
      <ContainerStyle>
        {startDownload ? (
          error ? (
            <Alert severity="error">{message}</Alert>
          ) : (
            <Alert severity="success">{message}</Alert>
          )
        ) : null}
        <TitleStyle>Download File</TitleStyle>
        <FileNameStyle>{fileInfo.name}</FileNameStyle>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          color="success"
          onClick={handleDownload}
        >
          Download
        </Button>
        <FileNameStyle>
          The file has been downloaded: {fileInfo.downloadCount}
        </FileNameStyle>
      </ContainerStyle>
    </>
  );
};

export default UnproductedFile;
