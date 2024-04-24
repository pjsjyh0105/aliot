"use client";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Eventpopup from "./SVGFile/Eventpopup";
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0시는 12시로 변환
  const hoursFormatted = hours < 10 ? "0" + hours : hours;
  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;
  const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;

  return hoursFormatted + ":" + minutesFormatted + " " + ampm;
}
const Header = () => {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString("ko-KR"); // 한국어 설정 예
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [alermClick, setAlermClick] = useState(false);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  const onalermClick = () => {
    console.log(alermClick);
    setAlermClick(!alermClick);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "4.5625rem",
        alignItems: "center",
        backdropFilter: "blur(6px)",
      }}
    >
      <Typography
        sx={{ color: "white", fontSize: "1.3125rem", fontWeight: "600" }}
      >
        지윰 대명 리조트
      </Typography>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          right: 0,
          height: "3.40625rem",
          marginRight: "1.87rem",
          top: 0,
          alignItems: "center",
        }}
      >
        <IconButton sx={{ marginRight: "1.44rem" }} onClick={onalermClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect
              width="40"
              height="40"
              rx="20"
              fill={alermClick ? "#FF7979" : "#1B2747"}
            />
            <g filter="url(#filter0_d_2871_68648)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.2429 20.8104C14.1083 18.7451 14.3372 16.325 15.2779 14.4495C15.744 13.5202 16.3769 12.7396 17.2141 12.1899C18.048 11.6423 19.1208 11.2998 20.509 11.2998C21.9106 11.2998 22.9785 11.6489 23.8003 12.2036C24.6259 12.761 25.243 13.553 25.695 14.4979C26.6079 16.4064 26.8107 18.8625 26.7208 20.9486C26.6839 21.8038 26.7902 22.6832 27.1135 23.5142L27.6909 24.9981C27.7802 25.2275 27.6109 25.475 27.3647 25.475H13.6535C13.4073 25.475 13.2381 25.2275 13.3274 24.998L13.8584 23.6337C14.2158 22.7154 14.3036 21.7419 14.2429 20.8104ZM20.509 9.99976C18.896 9.99976 17.5692 10.4015 16.5006 11.1032C15.4353 11.8027 14.6628 12.7763 14.1158 13.8667C13.0306 16.0305 12.8034 18.7119 12.9457 20.8949C12.9976 21.6923 12.9179 22.4659 12.6469 23.1622L12.1159 24.5265C11.6949 25.6082 12.4928 26.775 13.6535 26.775H17.0667C17.0942 28.4506 18.461 29.8004 20.1431 29.8004C21.8253 29.8004 23.1921 28.4506 23.2196 26.775H27.3647C28.5254 26.775 29.3233 25.6084 28.9024 24.5267L28.325 23.0428C28.0793 22.4113 27.9889 21.7172 28.0196 21.0046C28.1131 18.8354 27.9158 16.128 26.8677 13.9369C26.3391 12.832 25.5853 11.8402 24.5276 11.1262C23.4661 10.4096 22.1381 9.99976 20.509 9.99976ZM21.7192 26.775H18.5671C18.5942 27.6221 19.2895 28.3004 20.1431 28.3004C20.9968 28.3004 21.692 27.6221 21.7192 26.775Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2871_68648"
                x="11.002"
                y="9.99976"
                width="19.0146"
                height="21.8006"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2871_68648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2871_68648"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </IconButton>
        <Box
          sx={{
            width: "0.1rem",
            height: "100%",
            backgroundColor: "rgba(94, 106, 140, 0.60)",
          }}
        ></Box>
        <Box sx={{ marginLeft: "1rem" }}>
          <Box sx={{ color: "#E2E2E2", fontSize: "0.8125rem" }}>
            {dateString}
          </Box>
          <Box
            sx={{ color: "#E2E2E2", fontSize: "1rem", marginTop: "0.19rem" }}
          >
            {currentTime}
          </Box>
        </Box>
      </Box>
      <Eventpopup alermClick={alermClick}></Eventpopup>
    </Box>
  );
};

export default Header;
