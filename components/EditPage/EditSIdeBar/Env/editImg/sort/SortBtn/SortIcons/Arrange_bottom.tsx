import { Button, IconButton } from "@mui/material";
import { useState } from "react";
import { WorldBackgroundData } from "../../../../../../../Drawer/state";
import { useRecoilState } from "recoil";
export const Arrange_bottom = () => {
  const [isSortClick, setisSortClick] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fillColor = isSortClick ? "#7E73FE" : isHover ? "#E0E0E0" : "none";
  const inColor = isSortClick ? "#fff" : isHover ? "#4D4D4D" : "#4D4D4D";
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const onClick = () => {
    const nowposition = worldData.backgroundImgPosition;
    let thisData = "";
    if (!nowposition.includes("bottom")) {
      if (nowposition.includes("left")) {
        thisData = "left";
      } else if (nowposition.includes("right")) {
        thisData = "right";
      }
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgPosition: thisData + " bottom",
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
        <rect
          x="40"
          y="40"
          width="40"
          height="40"
          rx="3"
          transform="rotate(-180 40 40)"
          fill={fillColor}
        />
        <path
          d="M16 15L16 25C16 26.1046 16.8954 27 18 27L22 27C23.1046 27 24 26.1046 24 25L24 15L16 15Z"
          fill={inColor}
        />
        <path d="M11 14L29 14" stroke={inColor} stroke-width="2" />
      </svg>
    </Button>
  );
};
