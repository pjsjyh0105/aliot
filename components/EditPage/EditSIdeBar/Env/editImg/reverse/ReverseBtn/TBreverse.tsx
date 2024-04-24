import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { WorldBackgroundData } from "../../../../../../Drawer/state";
import { useRecoilState } from "recoil";
import { CustomPurpleIconButton } from "../../../../../Edit_com/CustomPurpleIconBtn";

export const TBreverse = () => {
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const onClick = () => {
    const parts = worldData.backgroundImgTransform.split(" ");
    const transX = parts[0];
    const transY = parts[1];

    if (transY == "scaleY(1)") {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgTransform: transX + " scaleY(-1)",
      }));
    } else {
      setWorldData((prevWorldData) => ({
        ...prevWorldData,
        backgroundImgTransform: transX + " scaleY(1)",
      }));
    }
  };
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
        d="M20.5 13L20.5 8C20.5 7.17157 19.8284 6.5 19 6.5L10 6.5C9.17157 6.5 8.5 7.17157 8.5 8L8.5 13L7 13L7 8C7 6.34315 8.34315 5 10 5L19 5C20.6569 5 22 6.34315 22 8L22 13L20.5 13Z"
        fill={fillColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.0796 21.8611L21.7724 22.1484C21.919 21.7946 22 21.4068 22 21L22 20.0727L21.25 20.0727L20.5 20.0727L20.5 21C20.5 21.2062 20.4592 21.399 20.3868 21.5738L21.0796 21.8611ZM7 21L7 20.0727L7.75 20.0727L8.5 20.0727L8.5 21C8.5 21.2062 8.54075 21.399 8.61323 21.5738L7.92044 21.8611L7.22764 22.1484C7.08096 21.7946 7 21.4068 7 21ZM7 17L7 18.2182L7.75 18.2182L8.5 18.2182L8.5 17L7 17ZM20.5 17L20.5 18.2182L21.25 18.2182L22 18.2182L22 17L20.5 17ZM17.875 23.25L17.875 24L19 24C19.4068 24 19.7946 23.919 20.1484 23.7724L19.8611 23.0796L19.5738 22.3868C19.399 22.4592 19.2062 22.5 19 22.5L17.875 22.5L17.875 23.25ZM15.625 23.25L15.625 24L13.375 24L13.375 23.25L13.375 22.5L15.625 22.5L15.625 23.25ZM11.125 23.25L11.125 24L10 24C9.59323 24 9.20536 23.919 8.85164 23.7724L9.13893 23.0796L9.42622 22.3868C9.601 22.4592 9.79385 22.5 10 22.5L11.125 22.5L11.125 23.25Z"
        fill={fillColor}
      />
      <path
        d="M23 15L6 15"
        stroke={fillColor}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
  return (
    <CustomPurpleIconButton
      getWidth="7.4375rem"
      text="상하 반전"
      getonClick={onClick}
      Icon={IconComponent}
    ></CustomPurpleIconButton>
  );
};
