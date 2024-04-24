import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { RecoilState, useRecoilState } from "recoil";
import { WorldBackgroundData } from "../../../../../../Drawer/state";
import { Console } from "console";
import { CustomPurpleIconButton } from "../../../../../Edit_com/CustomPurpleIconBtn";
export const LRreverse = () => {
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const IconComponent = ({ fillColor }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 9.5H8C7.17157 9.5 6.5 10.1716 6.5 11V20C6.5 20.8284 7.17157 21.5 8 21.5H13V23H8C6.34315 23 5 21.6569 5 20V11C5 9.34315 6.34315 8 8 8H13V9.5Z"
        fill={fillColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.8611 8.92044L22.1484 8.22764C21.7946 8.08096 21.4068 8 21 8L20.0727 8L20.0727 8.75L20.0727 9.5L21 9.5C21.2062 9.5 21.399 9.54075 21.5738 9.61323L21.8611 8.92044ZM21 23L20.0727 23L20.0727 22.25L20.0727 21.5L21 21.5C21.2062 21.5 21.399 21.4592 21.5738 21.3868L21.8611 22.0796L22.1484 22.7724C21.7946 22.919 21.4068 23 21 23ZM17 23L18.2182 23L18.2182 22.25L18.2182 21.5L17 21.5L17 23ZM17 9.5L18.2182 9.5L18.2182 8.75L18.2182 8L17 8L17 9.5ZM23.25 12.125L24 12.125L24 11C24 10.5932 23.919 10.2054 23.7724 9.85164L23.0796 10.1389L22.3868 10.4262C22.4592 10.601 22.5 10.7938 22.5 11L22.5 12.125L23.25 12.125ZM23.25 14.375L24 14.375L24 16.625L23.25 16.625L22.5 16.625L22.5 14.375L23.25 14.375ZM23.25 18.875L24 18.875L24 20C24 20.4068 23.919 20.7946 23.7724 21.1484L23.0796 20.8611L22.3868 20.5738C22.4592 20.399 22.5 20.2062 22.5 20L22.5 18.875L23.25 18.875Z"
        fill={fillColor}
      />
      <path
        d="M15 7L15 24"
        stroke={fillColor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
  const onHandleClick = () => {
    const parts = worldData.backgroundImgTransform.split(" ");
    const transX = parts[0];
    const transY = parts[1];

    if (transX == "scaleX(1)") {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgTransform: "scaleX(-1) " + transY,
      }));
    } else {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgTransform: "scaleX(1) " + transY,
      }));
    }
  };
  return (
    <CustomPurpleIconButton
      getWidth="7.4375rem"
      text="좌우 반전"
      getonClick={onHandleClick}
      Icon={IconComponent}
    ></CustomPurpleIconButton>
  );
};
