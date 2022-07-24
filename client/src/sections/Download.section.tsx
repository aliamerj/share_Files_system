import { useParams } from "react-router-dom";
import ProductedFile from "../components/content/download/ProtectedFile";
import UnproductedFile from "../components/content/download/UnprotectedFile";
import {
  ContainerDownloadStyle,
  WrapperDownloadStyle,
} from "../styles/content.style/download.style/download.style";

const DownloadSection = () => {
  const { fileId } = useParams();
  //todo => get file data { name , protection}
  console.log(fileId);
  let protecte = true;
  return (
    <ContainerDownloadStyle>
      <WrapperDownloadStyle>
        {protecte ? <ProductedFile /> : <UnproductedFile />}
      </WrapperDownloadStyle>
    </ContainerDownloadStyle>
  );
};

export default DownloadSection;
