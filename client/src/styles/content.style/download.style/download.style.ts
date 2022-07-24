import { styled } from "@mui/material/styles";

export const ContainerDownloadStyle = styled("div")(() => ({
  height: "86vh",
  display: "flex",
  alignItems: "center",
}));
export const WrapperDownloadStyle = styled("div")(() => ({
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
}));
export const LeftDownloadStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const RightDownloadStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));
export const CenterDownloadStyle = styled("div")(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));
export const LineDownloadStyle = styled("div")(() => ({
  width: "1.5px",
  height: "40vh",
  marginRight: "50px",
  backgroundColor: "lightgray",
}));
