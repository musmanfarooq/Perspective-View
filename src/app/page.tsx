"use client";
import { getMobileOS } from "@/helpers/helper";
import dynamic from "next/dynamic";

const MainContent = dynamic(() => import("@/components/MainContent/page"));
const UnSupportedDevice = dynamic(
  () => import("@/components/UnSupportedDevice/unSupportedDevice")
);
const Navbar = dynamic(() => import("@/components/Navbar/navbar"));

export default function Home() {
  const getOS = getMobileOS();
  if (getOS === "Unsupported" || getOS === "Android") {
    return <UnSupportedDevice deviceAndroid={getOS === "Android"} />;
  }
  return (
    <>
      {(getOS == "iOS" || getOS === "Android") && <Navbar />}
      <MainContent />
    </>
  );
}
