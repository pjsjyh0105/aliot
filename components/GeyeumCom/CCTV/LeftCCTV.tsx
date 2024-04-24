import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CCTVcircle from "../SVGFile/CCTVcircle";
import CCTVcontrol from "./CCTVcontrol";
import { useEffect, useState } from "react";
import { cctvclickfloor, clickcctvname } from "../CCTVclick";
import { useRecoilState } from "recoil";
const LeftCCTV = ({ cctvinfo, setfloor }: { cctvinfo: any; setfloor: any }) => {
  const [clickfloor, setclickfloor] = useState<string | null>("first");
  const [getclickfloor, setGetclickfloor] = useRecoilState(cctvclickfloor);
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setclickfloor(newAlignment);
    setGetclickfloor(newAlignment);
  };
  return (
    <Box
      sx={{
        width: {
          xs: "10vw",
          sm: "12vw",
          md: "15vw",
          lg: "17.5vw",
          xl: "20vw",
        },
        maxHeight: {
          xs: "30vh",
          sm: "40vh",
          md: "50vh",
          lg: "60.5vh",
          xl: "80vh",
        },
        overflow: "hidden",
        padding: "0.625rem 1.25rem 2.3125rem 1.25rem",
        backgroundColor: "rgba(2, 10, 27, 0.70)",
        backdropFilter: "blur(10px)",
        borderRadius: "0.5rem",
        position: "absolute",
        left: "2rem",
        top: "9.31rem",
        zIndex: 1,
      }}
    >
      <Box sx={{ paddingY: "0.75rem", display: "flex", alignItems: "center" }}>
        <CCTVcircle></CCTVcircle>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "600",
            lineHeight: "140%",
            color: "#DAEDFF",
            marginLeft: "0.25rem",
            alignItems: "center",
          }}
        >
          CCTV 장치 현황
        </Typography>
      </Box>
      <Box
        sx={{
          height: "0.1rem",
          backgroundColor: "#96BAFF",
          marginBottom: "1.25rem",
        }}
      ></Box>
      <ToggleButtonGroup
        value={clickfloor}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        color="primary"
        sx={{
          backgroundColor: "rgba(57,136,229,0.1)",
          width: "100%",
          height: "2.0625rem",
          marginBottom: "1.69rem",
          justifyContent: "center",
          display: setfloor == "cctv" ? "flex" : "none",
        }}
      >
        <ToggleButton
          value="first"
          aria-label="first"
          sx={{
            flexGrow: 1, // 모든 ToggleButton에 같은 비율로 공간 할당
            "&.Mui-selected": {
              backgroundColor: "rgba(57,136,229,0.7)", // 선택 시 배경색 변경
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(57,136,229,0.5)", // 호버 시 배경색 변경
              },
            },
            "&:hover": {
              backgroundColor: "rgba(57,136,229,0.3)", // 호버 시 기본 배경색 변경
            },
            color: "white", // 기본 글자 색상
          }}
        >
          <Typography sx={{ color: "white" }}>1층</Typography>
        </ToggleButton>
        <ToggleButton
          value="second"
          aria-label="second"
          sx={{
            flexGrow: 1, // 모든 ToggleButton에 같은 비율로 공간 할당
            "&.Mui-selected": {
              backgroundColor: "rgba(57,136,229,0.7)", // 선택 시 배경색 변경
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(57,136,229,0.5)", // 호버 시 배경색 변경
              },
            },
            "&:hover": {
              backgroundColor: "rgba(57,136,229,0.3)", // 호버 시 기본 배경색 변경
            },
            color: "white", // 기본 글자 색상
          }}
        >
          <Typography sx={{ color: "white" }}>2층</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <Box
        sx={{
          overflowY: "scroll", // 스크롤 기능 활성화

          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, Opera*/,
          },
          maxHeight: "46.31rem",
        }}
      >
        {cctvinfo.map((value) => (
          // eslint-disable-next-line react/jsx-key
          <CCTVcontrol
            name={value.name}
            state="정상"
            setfloor={setfloor === "cctv" ? clickfloor : setfloor}
          ></CCTVcontrol>
        ))}
      </Box>
    </Box>
  );
};

export default LeftCCTV;
