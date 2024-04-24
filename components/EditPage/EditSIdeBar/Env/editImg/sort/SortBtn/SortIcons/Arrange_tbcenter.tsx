import { Button, IconButton } from "@mui/material";
import { useState } from "react";
import { WorldBackgroundData } from "../../../../../../../Drawer/state";
import { useRecoilState } from "recoil";
export const Arrange_tbcenter = () => {
  const [isSortClick, setisSortClick] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fillColor = isSortClick ? "#7E73FE" : isHover ? "#E0E0E0" : "none";
  const inColor = isSortClick ? "#fff" : isHover ? "#4D4D4D" : "#4D4D4D";
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const onClick = () => {
    const nowposition = worldData.backgroundImgPosition;
    if (nowposition.includes("left")) {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgPosition: "left center",
      }));
    } else if (nowposition.includes("right")) {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgPosition: "right center",
      }));
    } else {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgPosition: "center",
      }));
    }
  };
  return (
    <Button
      sx={{ width: "2.5rem", height: "2.5rem", padding: 0 }}
      onClick={() => {
        setisSortClick(true), onClick();
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false), setisSortClick(false);
      }}
      disableRipple
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <rect width="40" height="40" rx="3" fill={fillColor} />
        <path d="M29 19L11 19" stroke={inColor} stroke-width="2" />
        <path
          d="M22 11C23.1046 11 24 11.8954 24 13L24 25C24 26.1046 23.1046 27 22 27L18 27C16.8954 27 16 26.1046 16 25L16 13C16 11.8954 16.8954 11 18 11L22 11Z"
          fill={inColor}
        />
      </svg>
    </Button>
  );
};
