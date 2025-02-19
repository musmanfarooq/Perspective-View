import dynamic from "next/dynamic";

const MainContent = dynamic(() => import("@/components/MainContent/page"));

export default function Home() {
  return (
    <MainContent/>
  );
}