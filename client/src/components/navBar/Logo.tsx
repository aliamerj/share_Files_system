import FolderSharedIcon from "@mui/icons-material/FolderShared";
import {
  LogoContainer,
  LogoIcon,
  LogoText,
} from "../../styles/navBar.style/logo.style";
const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon>
        <FolderSharedIcon
          sx={{
            fontSize: 40,
            width: "100%",
          }}
        />
      </LogoIcon>
      <LogoText>Share File</LogoText>
    </LogoContainer>
  );
};

export default Logo;
