import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const TitleStyle = styled("h2")(({ theme }) => ({
  marginTop: "20%",
  display: "flex",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
  },
}));
export const TextareaStyle = styled("textarea")(({ theme }) => ({
  border: "2px solid #a1922e",
  outline: "none",
  width: "90%",
  height: "8rem",
  margin: "auto",
  resize: "none",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  [theme.breakpoints.down("md")]: {
    marginBottom: "8px",
  },
}));
