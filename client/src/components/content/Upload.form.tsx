import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import {
  CenterStyle,
  ContainerFormStyle,
  LeftStyle,
  LineStyle,
  RightStyle,
  WrapperStyle,
} from "../../styles/content.style/form.style";

interface IFormInputs {
  password: string;
  file: string[];
}

const UploadForm = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <ContainerFormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessage
          errors={errors}
          name="singleErrorInput"
          render={({ message }) => <p>{message}</p>}
        />
        <WrapperStyle>
          <LeftStyle>
            <h1>res</h1>
          </LeftStyle>
          <CenterStyle>
            <LineStyle />
          </CenterStyle>
          <RightStyle>
            <TextField
              type="password"
              fullWidth
              label="password"
              variant="outlined"
              size="small"
              {...register("password")}
            />

            <Button
              variant="contained"
              component="label"
              color="error"
              startIcon={<UploadFileIcon />}
            >
              <input
                id="file"
                type="file"
                onInput={(data: any) =>
                  setFileName(data.target.value.split("\\")[2])
                }
                hidden
                {...register("file", { required: "Select file first" })}
              />
              {fileName ? (
                fileName
              ) : (
                <Typography variant="subtitle2" textTransform="capitalize">
                  Choose a file…
                </Typography>
              )}
            </Button>

            <ErrorMessage errors={errors} name="file" />

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </RightStyle>
        </WrapperStyle>
      </form>
    </ContainerFormStyle>
  );
};

export default UploadForm;
