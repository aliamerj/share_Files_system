import { styled } from "@mui/material/styles";

export const ContainerFormStyle = styled("div")(() => ({
  height: "63vh",
}));
export const WrapperStyle = styled("div")(({ theme }) => ({
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
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const LeftStyle = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    borderBottom: "1.5px solid lightgray",
  },
}));
export const RightStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));
export const CenterStyle = styled("div")(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));
export const LineStyle = styled("div")(({ theme }) => ({
  width: "1.5px",
  height: "305px",
  marginRight: "50px",
  backgroundColor: "lightgray",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const TextStyle = styled("h2")(() => ({
  display: "flex",
  padding: "10px",
}));
export const ButtonsStyle = styled("div")(() => ({
  marginTop: "5%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "5%",
}));

export const ErrorMessageStyle = styled("p")(() => ({
  fontFamily: "cursive",
  height: "auto",
  padding: "auto",
  margin: "auto",
}));
export const ErrorMessageConainer = styled("div")(({ theme }) => ({
  marginTop: "auto",
  fontFamily: "cursive",
  padding: "auto",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    marginTop: "5px",
  },
}));
