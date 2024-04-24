import { Box, Typography } from "@mui/material";
import Hls from "hls.js";
import { useEffect, useRef } from "react";
const CCTVmodal = ({
  cctvinfo,
  setIsCCTVon,
}: {
  cctvinfo: string;
  setIsCCTVon: any;
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("https://dt.gractor.com/video/live.m3u8");
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = "https://dt.gractor.com/video/live.m3u8";
      video.addEventListener("loadedmetadata", function () {
        video.play();
      });
    } else {
      console.log("Your browser does not support HLS");
    }
  });
  return (
    <Box
      sx={{
        width: "23rem",
        height: "30rem",
        position: "absolute",
        right: "5%",
        top: "20%",
        backgroundColor: "rgba(237, 237, 237)",
        border: "1.8px solid #000",
        padding: "2rem 2rem",
        borderRadius: "0.1875rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ right: 0, top: 0, position: "absolute", cursor: "pointer" }}
        onClick={() => setIsCCTVon(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.9174 14.5365C27.2688 14.185 27.2688 13.6152 26.9174 13.2637C26.5659 12.9123 25.996 12.9123 25.6446 13.2637L19.9417 18.9666L14.2387 13.2637C13.8873 12.9123 13.3174 12.9123 12.966 13.2637C12.6145 13.6152 12.6145 14.185 12.966 14.5365L18.6689 20.2394L12.9638 25.9445C12.6123 26.296 12.6123 26.8658 12.9638 27.2173C13.3153 27.5687 13.8851 27.5687 14.2366 27.2173L19.9417 21.5122L25.6467 27.2173C25.9982 27.5687 26.568 27.5687 26.9195 27.2173C27.271 26.8658 27.271 26.296 26.9195 25.9445L21.2144 20.2394L26.9174 14.5365Z"
            fill="#474747"
          />
        </svg>
      </Box>
      <Typography sx={{ marginBottom: "1rem" }}>{cctvinfo}</Typography>

      <video
        ref={videoRef}
        controls
        style={{ width: "15rem", height: "15rem" }}
      ></video>
    </Box>
  );
};

export default CCTVmodal;
