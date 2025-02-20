import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getMobileOS } from "@/helpers/helper";
const FileUpload = dynamic(() => import("@/components/FileUpload/fileUpload"));
const ARView = dynamic(() => import("@/components/ARView/ARView"));

const MainContent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const getOS = getMobileOS();

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      //   if (getOS === "Android" && file.type !== "model/gltf+json") {
      //     return setError("Invalid file type, Please upload a GLTF/GLB file.");
      //   }
      if (getOS === "iOS" && file.type !== "model/vnd.usdz+zip") {
        return setError("Invalid file type, Please upload a USDZ file.");
      }
      setFileUrl(url);
      // Clean up the URL when the component unmounts or the file changes
      return () => URL.revokeObjectURL(url);
    } else {
      setFileUrl(null);
    }
  }, [file, getOS]);

  return (
    <>
      <Box mt={10}>
        <FileUpload file={file} setFile={setFile} />
        {file && (
          <>
            {error ? (
              <Box textAlign="center" mt={2}>
                {error}
              </Box>
            ) : (
              <Box textAlign="center" mt={2}>
                File Uploaded. Please wait...
              </Box>
            )}
          </>
        )}
        {file && fileUrl && (
          <ARView
            file={file}
            fileUrl={fileUrl}
            // isAndroid={getOS === "Android"}
          />
        )}
      </Box>
    </>
  );
};

export default MainContent;
