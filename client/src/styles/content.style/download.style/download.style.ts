import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const ContainerDownloadStyle = styled("div")(() => ({
  height: "86vh",
  display: "flex",
  alignItems: "center",
}));
export const WrapperDownloadStyle = styled("div")(({ theme }) => ({
  background: "#fff",
  padding: "3%",
  width: "60%",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  borderRadius: "22px",
  boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
  WebkitBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
  MozBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const LeftDownloadStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const RightDownloadStyle = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "2px",
    borderBottom: "1px solid lightgray",
    marginBottom: "7px",
  },
}));
export const CenterDownloadStyle = styled("div")(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));
export const LineDownloadStyle = styled("div")(({ theme }) => ({
  width: "1.5px",
  height: "305px",
  marginRight: "50px",
  backgroundColor: "lightgray",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const DownloadFormStyle = styled("form")(({ theme }) => ({
  display: "flex",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
}));

export const TitleProtectedFile = styled("h2")(({ theme }) => ({
  color: "#383939",
  [theme.breakpoints.down("md")]: {
    fontSize: "29px",
    marginBottom: "auto",
  },
}));
export const SubTitleProtectedFile = styled("h2")(({ theme }) => ({
  color: "#383939",
  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
    marginBottom: "25px",
  },
}));
export const TextFieldStyle = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: "7px",
  },
}));
