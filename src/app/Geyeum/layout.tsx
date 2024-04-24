"use client";
import Geyeum from "../../../components/GeyeumCom/Geyeum";
import Header from "../../../components/GeyeumCom/Header";
import { useState } from "react";
import MainTab from "../../../components/GeyeumCom/MainTab";
import { Box } from "@mui/material";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [nowTab, setNowTab] = useState("all");
  return (
    <html lang="en" style={{ overflow: "hidden", height: "100%" }}>
      <RecoilRoot>
        <body
          style={{
            background:
              "linear-gradient(180deg, #1C2949 0%, #030620 100%, #030620 100%)",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <Geyeum nowTab={nowTab}></Geyeum>
          <Header></Header>

          <MainTab setNowTab={setNowTab}></MainTab>
        </body>
      </RecoilRoot>
    </html>
  );
}
