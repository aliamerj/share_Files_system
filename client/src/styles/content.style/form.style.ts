import { styled } from "@mui/material/styles";

export const ContainerFormStyle = styled("div")(() => ({
  height: "50vh",
}));
export const WrapperStyle = styled("div")(() => ({
  background: "#fff",
  padding: "5%",
  height: "28vh",
  width: "60%",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  borderRadius: "22px",
  boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
  WebkitBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
  MozBoxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
}));

export const LeftStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const RightStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const CenterStyle = styled("div")(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));
export const LineStyle = styled("div")(() => ({
  width: "1.2px",
  height: "155%",
  marginRight: "50px",
  backgroundColor: "lightgray",
}));
