import { Box } from "@mui/material";
import React from "react";

interface UnSupportedDeviceProps {
  deviceAndroid?: boolean;
}

const UnSupportedDevice = (props: UnSupportedDeviceProps) => {
  return (
    <Box textAlign="center" display="grid" alignContent="center" height="100vh">
      {props.deviceAndroid ? (
        <p>
          I am working to bring this feature to Android. Please be patient and
          check back soon.
        </p>
      ) : (
        <p>Sorry we currently do not support this device, Please an iPhone.</p>
      )}
    </Box>
  );
};

export default UnSupportedDevice;
