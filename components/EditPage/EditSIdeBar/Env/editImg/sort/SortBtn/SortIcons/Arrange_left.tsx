import { Button, IconButton } from "@mui/material";
import { useState } from "react";
import { WorldBackgroundData } from "../../../../../../../Drawer/state";
import { useRecoilState } from "recoil";
export const Arrange_left = () => {
  const [isSortClick, setisSortClick] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fillColor = isSortClick ? "#7E73FE" : isHover ? "#E0E0E0" : "none";
  const inColor = isSortClick ? "#fff" : isHover ? "#4D4D4D" : "#4D4D4D";
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const onClick = () => {
    const nowposition = worldData.backgroundImgPosition;
    let thisData = "";
    if (!nowposition.includes("left")) {
      if (nowposition.includes("top")) {
        thisData = "top";
      } else if (nowposition.includes("bottom")) {
        thisData = "bottom";
      }
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgPosition: thisData + " left",
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
        <path
          d="M25 16H15C13.8954 16 13 16.8954 13 18V22C13 23.1046 13.8954 24 15 24H25V16Z"
          fill={inColor}
        />
        <path d="M26 11V29" stroke={inColor} stroke-width="2" />
      </svg>
    </Button>
  );
};
