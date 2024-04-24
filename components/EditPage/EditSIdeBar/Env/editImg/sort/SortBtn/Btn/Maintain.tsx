import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { WorldBackgroundData } from "../../../../../../../Drawer/state";
import { useRecoilState } from "recoil";
import { CustomPurpleIconButton } from "../../../../../../Edit_com/CustomPurpleIconBtn";

export const Maintain = () => {
  const [isSortClick, setisSortClick] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const fillColor = isSortClick ? "#7E73FE" : isHover ? "#DDD" : "#F8F8F8";
  const fontColor = isSortClick ? "#fff" : isHover ? "#2F2F2F" : "#2F2F2F";
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const onClick = () => {
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      backgroundImgSize: "contain",
    }));
  };
  return (
    <CustomPurpleIconButton
      getWidth="7.4375rem"
      text="비율 유지"
      getonClick={onClick}
    ></CustomPurpleIconButton>
  );
};
