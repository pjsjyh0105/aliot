"use client";
import React, { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let fontSize = "";

      if (screenWidth <= 500) {
        fontSize = "var(--font-size-small)";
      } else if (screenWidth > 500 && screenWidth <= 1920) {
        fontSize = `calc(var(--font-size-small) + 
          (var(--font-size-medium) - var(--font-size-small)) * 
          ((100vw - 500px) / (1920 - 500)))`;
      } else if (screenWidth > 1920 && screenWidth <= 2650) {
        fontSize = "var(--font-size-medium)";
      } else {
        fontSize = "var(--font-size-xlarge)";
      }

      document.documentElement.style.fontSize = fontSize;
    };

    handleResize(); // 초기 로드 시에도 크기 조절 적용
    if (typeof window !== "undefined") {
      // window 객체를 사용하는 코드
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <main style={{ width: "100%", height: "100%" }}></main>;
}
