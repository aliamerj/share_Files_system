import { Button, TextField } from "@mui/material";
import {
  CenterDownloadStyle,
  LeftDownloadStyle,
  LineDownloadStyle,
  RightDownloadStyle,
} from "../../../styles/content.style/download.style/download.style";
import {
  FileNameStyle,
  TitleStyle,
} from "../../../styles/content.style/download.style/unprotectedFile.style";
import DownloadIcon from "@mui/icons-material/Download";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DownloadForm } from "../../../Types/types";

const ProductedFile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DownloadForm>();
  const [startTyping, setStartTyping] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStartTyping(true);
    if (!e.target.value) {
      setStartTyping(false);
    }
  };

  const onSubmit: SubmitHandler<DownloadForm> = (data) => {
    console.log(data);
    if (errors.password?.message) {
      setError(true);
      setErrorMessage(errors.password.message);
    } else {
      reset();
      setStartTyping(false);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", width: "100%" }}
      >
        <LeftDownloadStyle>
          <TitleStyle>Download File</TitleStyle>
          <FileNameStyle>photo.jpg</FileNameStyle>

          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            color="success"
            disabled={!startTyping}
            type="submit"
          >
            Download
          </Button>
        </LeftDownloadStyle>
        <CenterDownloadStyle>
          <LineDownloadStyle />
        </CenterDownloadStyle>
        <RightDownloadStyle>
          <h2>This File is Protected with Password</h2>
          <h3>You can Download it only if you have courret password</h3>
          <TextField
            error={error}
            id="outlined-error"
            label="Password"
            type="password"
            variant="outlined"
            required
            helperText={errorMessage}
            {...register("password", { required: "You should input password" })}
            onChange={(data) => handleChangeInput(data)}
          />
        </RightDownloadStyle>
      </form>
    </>
  );
};

export default ProductedFile;
