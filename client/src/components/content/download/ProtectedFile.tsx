import { Alert, Button, TextField } from "@mui/material";
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
import { DownloadForm, GetfileInfo } from "../../../Types/types";
import { downloadProtectedFile } from "../../../utils/handleRequests";

const ProductedFile = ({
  fileInfo,
  id,
}: {
  fileInfo: GetfileInfo;
  id: string;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DownloadForm>();
  const [startTyping, setStartTyping] = useState<boolean>(false);
  const [startDownload, setStartDownload] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
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
    if (!errors.password && data.password) {
      downloadProtectedFile(id, data)
        .then(() => {
          setError(false);
          setStartDownload(true);
          setMessage("download success");
        })
        .catch((err: any) => {
          setStartDownload(true);
          setError(true);
          setMessage(err.response.data);
        });
    }
    if (errors.password?.message) {
      setError(true);
      setMessage(errors.password.message);
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
          {startDownload ? (
            error ? (
              <Alert severity="error">{message}</Alert>
            ) : (
              <Alert severity="success">{message}</Alert>
            )
          ) : null}
          <TitleStyle>Download File</TitleStyle>
          <FileNameStyle>{fileInfo.name}</FileNameStyle>

          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            color="success"
            disabled={!startTyping}
            type="submit"
          >
            Download
          </Button>
          <FileNameStyle>
            The file has been downloaded: {fileInfo.downloadCount}
          </FileNameStyle>
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
            helperText={error ? message : ""}
            {...register("password", { required: "You should input password" })}
            onChange={(data) => handleChangeInput(data)}
          />
        </RightDownloadStyle>
      </form>
    </>
  );
};

export default ProductedFile;
