import { Button } from "@mui/material";
import {
  ContainerStyle,
  FileNameStyle,
  TitleStyle,
} from "../../../styles/content.style/download.style/unprotectedFile.style";
import DownloadIcon from "@mui/icons-material/Download";

const UnproductedFile = () => {
  return (
    <ContainerStyle>
      <TitleStyle>Download File</TitleStyle>
      <FileNameStyle>photo.jpg</FileNameStyle>
      <Button variant="contained" startIcon={<DownloadIcon />} color="success">
        Download
      </Button>
    </ContainerStyle>
  );
};

export default UnproductedFile;
