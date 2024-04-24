import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        overflowY: "scroll", // 스크롤 기능 활성화

        scrollbarWidth: "none" /* Firefox */,
      }}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
