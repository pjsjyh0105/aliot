import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { WorldBackgroundData } from "../../../../../../../Drawer/state";
import { useRecoilState } from "recoil";
import { CustomPurpleIconButton } from "../../../../../../Edit_com/CustomPurpleIconBtn";
export const FullBtn = () => {
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);

  const onClick = () => {
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      backgroundImgSize: "cover",
    }));
  };
  return (
    <CustomPurpleIconButton
      getWidth="7.4375rem"
      text="채우기"
      getonClick={onClick}
    ></CustomPurpleIconButton>
  );
};
