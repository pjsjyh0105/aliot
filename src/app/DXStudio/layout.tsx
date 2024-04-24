import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "../../../components/mainNav/navigation";
import Question from "../../../components/mainNav/question";
import RecoilRootProvider from "../../../components/RecoilRootProvider";
const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";
export const metadata: Metadata = {
  title: "DXStudio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <RecoilRootProvider>
        <Navigation />
        <Question />
        <div style={{ paddingTop: "3.75rem" }}>{children}</div>
      </RecoilRootProvider>
    </body>
  );
}