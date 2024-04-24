import { Box, IconButton, Typography } from "@mui/material";
import CCTVcircle from "../SVGFile/CCTVcircle";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { clickCCTVlist } from "../CCTVclick";
import { useRecoilValue } from "recoil";
import { Console } from "console";
import CCTVModal from "./CCTVModal";
const CCTVView = ({ name, setfloor }: { name: any; setfloor: any }) => {
  const videoRef = useRef(null);
  const [isON, setIsON] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const getclickCCTVlist = useRecoilValue(clickCCTVlist);
  const [isModalOn, setIsModalOn] = useState(false);
  const [ismouseon, setIsmouseon] = useState(false);
  const fillcolor = ismouseon ? "#060439" : "none";
  useEffect(() => {
    if (setfloor == "all") {
      setIsON(false);
    } else if (setfloor == "first") {
      if (name.includes("1F")) {
        setIsON(true);
      } else {
        setIsON(false);
      }
    } else if (setfloor == "second") {
      if (name.includes("2F")) {
        setIsON(true);
      } else {
        setIsON(false);
      }
    } else if (setfloor == "cctv") {
      setIsON(true);
    }
  }, [setfloor]);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("https://dt.gractor.com/video/live.m3u8");
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play().catch((error) => {
          console.error("Error trying to play the video: ", error);
          // 추가적인 오류 처리 로직을 여기에 작성할 수 있습니다.
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = "https://dt.gractor.com/video/live.m3u8";
      video.addEventListener("loadedmetadata", function () {
        video.play().catch((error) => {
          console.error("Error trying to play the video: ", error);
          // 추가적인 오류 처리 로직을 여기에 작성할 수 있습니다.
        });
      });
    } else {
      console.log("Your browser does not support HLS");
    }
  });
  useEffect(() => {
    if (getclickCCTVlist.length !== 0) {
      const isClicked = getclickCCTVlist.some((value) => value === name);
      setIsClick(isClicked);
    } else {
      setIsClick(false);
    }
  }, [getclickCCTVlist]);

  useEffect(() => {
    console.log(isModalOn);
  }, [isModalOn]);
  return (
    <Box
      sx={{
        display: isON && isClick ? "block" : "none",
        padding: "0.625rem 1.25rem 1.5625rem 1.25rem",
        borderRadius: "0.5rem",
        backgroundColor: "rgba(2, 10, 27, 0.70)",
        backdropFilter: "blur(10px)",
        alignItems: "flex-start",
        marginBottom: "1.25rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CCTVcircle></CCTVcircle>
          <Typography
            sx={{
              color: "#DAEDFF",
              marginLeft: "0.25rem",
              fontSize: "1rem",
              fontWeight: "600",
              lineHeight: "140%",
            }}
          >
            {name.split("_")[0]}
          </Typography>
        </Box>
        <IconButton
          onClick={() => {
            setIsModalOn(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <rect width="40" height="40" fill={fillcolor} />
            <path
              d="M15.666 15.666L9.4184 9.41839M9.4184 9.41839L9.76025 14.597M9.4184 9.41839L14.597 9.76024"
              stroke="white"
              stroke-width="1.56"
              stroke-linecap="round"
            />
            <path
              d="M20.4185 20.4184L26.6661 26.666M26.6661 26.666L26.3242 21.4873M26.6661 26.666L21.4874 26.3241"
              stroke="white"
              stroke-width="1.56"
              stroke-linecap="round"
            />
          </svg>
        </IconButton>
      </Box>
      <Box
        sx={{
          height: "0.1rem",
          backgroundColor: "#96BAFF",
          marginBottom: "1.25rem",
        }}
      ></Box>
      <Box>
        {" "}
        <video
          ref={videoRef}
          controls
          style={{ width: "20.625rem", height: "11.1875rem" }}
        ></video>
      </Box>
      {isModalOn && (
        <CCTVModal open={isModalOn} IsOpen={setIsModalOn}></CCTVModal>
      )}
    </Box>
  );
};

export default CCTVView;
