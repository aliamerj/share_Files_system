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
export const InfoContainerDefault = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: "0",
  paddingRight: "0",

  [theme.breakpoints.up("md")]: {
    marginRight: "20px",
  },

  [theme.breakpoints.down("md")]: {
    paddingLeft: "0",
    paddingRight: "0",
    marginBottom: "5%",
  },
}));
export const DefaultText = styled("h2")(({ theme }) => ({
  color: "#677689",
  paddingLeft: "0",
  fontSize: "150%",
  [theme.breakpoints.down("md")]: {
    fontSize: "140%",
  },
}));
