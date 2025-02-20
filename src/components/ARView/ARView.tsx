import { Box } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface ARViewProps {
  file: File | null;
  fileUrl: string | undefined;
  isAndroid?: boolean;
}

const ARView = (props: ARViewProps) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const ARUrl = props.isAndroid
    ? `intent://arvr.google.com/scene-viewer/1.0?file=${props.fileUrl}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;`
    : props.fileUrl;

  useEffect(() => {
    if (props.fileUrl && linkRef.current) {
      linkRef.current.click();
    }
  }, [props.fileUrl]); 

  return (
    <Box textAlign="center" mt={2}>
      <a ref={linkRef} rel="ar" href={ARUrl || ""} target="_blank">
        <Image
          src={ARUrl || ""}
          alt={props.file?.name || ""}
          width={120}
          height={120}
          style={{ opacity: "0%" }}
        />
      </a>
    </Box>
  );
};

export default ARView;
