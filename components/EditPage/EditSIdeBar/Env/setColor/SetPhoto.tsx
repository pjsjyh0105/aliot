import { Box, Typography } from "@mui/material";
import UploadFile from "../../../Edit_com/UploadFile";
import { WorldBackgroundData } from "../../../../Drawer/state";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FileList from "../../../Edit_com/FileList";
const SetPhoto = () => {
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const [worldImgData, setWorldImgData] = useRecoilState(WorldBackgroundData);

  useEffect(() => {
    setWorldImgData((prevWorldData) => ({
      ...prevWorldData,
      backgroundImg: worldData.backgroundImg,
      backgroundOpacity: worldData.backgrounOpacity,
      backgroundImgPosition: worldData.backgroundImgPosition,
      backgroundImgSize: worldData.backgroundImgSize,
      backgroundImgTransform: worldData.backgroundImgTransform,
      filter: worldData.filter,
      backgroundRepeat: "no-repeat",
    }));
  }, [
    worldData.backgroundImg,
    setWorldImgData,
    worldData.backgrounOpacity,
    worldData.backgroundImgPosition,
    worldData.backgroundImgSize,
    worldData.backgroundImgTransform,
    worldData.filter,
  ]);
  return (
    <Box sx={{ paddingX: "1rem" }}>
      <UploadFile type="img"></UploadFile>
      <FileList state={"Image"}></FileList>
    </Box>
  );
};
export default SetPhoto;
