import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  width: "100%",
  height: "45vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const InfoText = styled("h1")(() => ({
  fontSize: "300%",
  marginBottom: "1px",
  color: "#283442",
}));
export const InfoTextSub = styled("h4")(() => ({
  marginTop: "2px",
  color: "#677689",
}));
export const InfoContainerDefault = styled("h4")(() => ({
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
}));
export const DefaultText = styled("h2")(() => ({
  color: "#677689",
  fontSize: "155%",
}));
