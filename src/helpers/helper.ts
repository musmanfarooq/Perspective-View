export const getMobileOS = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return "Android";
  } else if (/iPad|iPhone|iPod/.test(ua)) {
    return "iOS";
  }
  else{
    return "Unsupported";
  }
};
