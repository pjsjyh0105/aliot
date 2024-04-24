import { Button, IconButton } from "@mui/material";
import { useState } from "react";
import { WorldBackgroundData } from "../../../../../../../Drawer/state";
import { useRecoilState } from "recoil";
export const Arrange_lrcenter = () => {
  const [isSortClick, setisSortClick] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fillColor = isSortClick ? "#7E73FE" : isHover ? "#E0E0E0" : "none";
  const inColor = isSortClick ? "#fff" : isHover ? "#4D4D4D" : "#4D4D4D";
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const onClick = () => {
    const nowposition = worldData.backgroundImgPosition;
    if (nowposition.includes("top")) {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgPosition: "top center",
      }));
    } else if (nowposition.includes("bottom")) {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgPosition: "bottom center",
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
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <rect width="40" height="40" rx="3" fill={fillColor} />
        <path d="M20 11V29" stroke={inColor} stroke-width="2" />
        <path
          d="M12 18C12 16.8954 12.8954 16 14 16H26C27.1046 16 28 16.8954 28 18V22C28 23.1046 27.1046 24 26 24H14C12.8954 24 12 23.1046 12 22V18Z"
          fill={inColor}
        />
      </svg>
    </Button>
  );
};
