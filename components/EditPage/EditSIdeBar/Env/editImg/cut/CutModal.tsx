import { Box, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ImageCrop from "./ImageCrop";
import { WorldBackgroundData } from "../../../../../Drawer/state/Drawer";
import { WorldImgData } from "../../../../../Drawer/state/Drawer";
import { useRecoilState } from "recoil";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CutModal = () => {
  const [isCrop, setIsCrop] = useState(true); //편집중인지 boolean
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const cutBackgroundFile = worldData.backgroundCutImg;
  const OriginclickFile = worldData.backgroundImg;
  const defaultFile = {
    url: "some-default-url",
  };
  const handleCrop = (cropData: { url: string; corners: any }) => {
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      backgroundImg: {
        ...prevWorldData.backgroundImg,
        left: cropData.corners.left,
        width: cropData.corners.width,
        height: cropData.corners.height,
        top: cropData.corners.top,
        url: cropData.url,
      },
    }));
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      backgroundCutImg: {
        ...prevWorldData.backgroundCutImg,
        left: cropData.corners.left,
        width: cropData.corners.width,
        height: cropData.corners.height,
        top: cropData.corners.top,
      },
    }));
  };
  return (
    <Box>
      <Box>
        <ImageCrop
          previewImage={cutBackgroundFile.url}
          onCrop={handleCrop}
          originfile={OriginclickFile || defaultFile}
        />
      </Box>
    </Box>
  );
};

export default CutModal;
