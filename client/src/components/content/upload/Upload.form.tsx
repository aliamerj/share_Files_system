import { useForm, SubmitHandler } from "react-hook-form";
import {
  Alert,
  AlertColor,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import {
  ButtonsStyle,
  ErrorMessageConainer,
  ErrorMessageStyle,
  TextStyle,
} from "../../../styles/content.style/upload.style/form.style";
import { uploadHandler } from "../../../utils/handleRequests";
import { ResponseUploading, UploadData } from "../../../Types/types";

const UploadForm = ({
  setFileDataHelper,
  fileData,
}: {
  setFileDataHelper: (data: ResponseUploading) => void;
  fileData: ResponseUploading | null;
}) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [statusFile, setStatusFile] = useState<AlertColor | undefined>();

  useEffect(() => {
    if (fileData?.success) {
      setStatusFile("success");
    }
    if (fileData && !fileData.success) {
      setStatusFile("error");
      console.log(statusFile);
    }
  }, [fileData]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UploadData>();
  const onSubmit: SubmitHandler<UploadData> = (data) => {
    setFileName(null);
    setStatusFile(undefined);
    uploadHandler(data, setFileDataHelper);
    reset();
  };

  return (
    <>
      <ErrorMessageConainer>
        <ErrorMessage
          errors={errors}
          name="files"
          render={({ message }: { message: string }) => (
            <Alert severity="error">
              <ErrorMessageStyle>{message}</ErrorMessageStyle>
            </Alert>
          )}
        />
        {fileData && statusFile && (
          <Alert severity={`${statusFile}`}>
            <ErrorMessageStyle>{fileData.message}</ErrorMessageStyle>
          </Alert>
        )}
      </ErrorMessageConainer>
      <TextStyle>You Can Protect your File with a Password</TextStyle>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <TextField
          type="password"
          fullWidth
          label="password"
          variant="outlined"
          size="small"
          {...register("password")}
        />

        <ButtonsStyle>
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
              {...register("files", { required: "Select file first" })}
            />
            {fileName ? (
              fileName
            ) : (
              <Typography variant="subtitle2" textTransform="capitalize">
                Choose a file…
              </Typography>
            )}
          </Button>

          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </ButtonsStyle>
      </form>
      <Button
        type="reset"
        variant="outlined"
        color="warning"
        onClick={() => {
          reset();
          setFileName(null);
          setStatusFile(undefined);
        }}
      >
        <Typography variant="subtitle2" textTransform="capitalize">
          remove file selected
        </Typography>
      </Button>
    </>
  );
};

export default UploadForm;

// the fist way to get error message
{
  /* <ErrorMessage errors={errors} name="file" /> */
}
