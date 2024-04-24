import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
interface VideoCCTVProps {
  geturl: string; // URL은 문자열이므로 string 타입을 사용합니다.
  getwidth?: string; // CSS 속성 값이므로 string으로 지정할 수 있습니다.
  getheight?: string; // 마찬가지로 string으로 지정합니다.
}
const VideoCCTV: React.FC<VideoCCTVProps> = ({
  geturl,
  getwidth,
  getheight,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(geturl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = geturl;
      video.addEventListener("loadedmetadata", function () {
        video.play();
      });
    } else {
      console.log("Your browser does not support HLS");
    }
  });
  return (
    <video
      ref={videoRef}
      controls
      style={{
        height: getheight ? getheight : "38.125rem",
        width: getwidth ? getwidth : "70.3125rem",
      }}
    ></video>
  );
};

export default VideoCCTV;
