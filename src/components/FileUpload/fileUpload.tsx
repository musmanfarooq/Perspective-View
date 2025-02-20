import { CloudUploadOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface FileUploadProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const HiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUpload = (props: FileUploadProps) => {
  return (
    <Box textAlign="center">
      <Typography variant="h5" mb={4}>
        Please upload your Model.
      </Typography>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        sx={{ width: "245px" }}
        startIcon={<CloudUploadOutlined />}
      >
        Upload files
        <HiddenInput
          type="file"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.setFile(event?.target?.files && event?.target?.files[0])
          }
        />
      </Button>
    </Box>
  );
};

export default FileUpload;
