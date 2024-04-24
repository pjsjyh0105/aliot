"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { GlobalStyles, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Collapse from "@mui/material/Collapse";
import DownupToggle from "../DownupToggle";
import { WorldBackgroundData } from "../../../../../Drawer/state";
import { useRecoilState, useRecoilValue } from "recoil";
const Opacity = () => {
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const getWorldData = useRecoilValue(WorldBackgroundData);
  const CustomSlider = styled(Slider)({
    "& .MuiSlider-rail": {
      backgroundColor: "#E8E8E8",
    },
  });
  const [expand, setExpand] = useState(false);
  const [opacityValue, setOpacityValue] = useState(100);
  const handleToggle = () => {
    setExpand(!expand);
  };
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setOpacityValue(newValue as number);
  };
  useEffect(() => {
    const imageElement = document.getElementById(
      "editImage"
    ) as HTMLImageElement;
    if (imageElement) {
      imageElement.style.opacity = (opacityValue / 100).toString();
    }
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      backgroundImg: {
        ...prevWorldData.backgroundImg,
        opacity: opacityValue / 100, // 0에서 1 사이의 값으로 설정
      },
    }));
  }, [opacityValue, setWorldData]);
  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const opacityValue = parseFloat(event.target.value);
    // 이미지 요소에 opacity를 설정합니다.
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DownupToggle setExpand={setExpand}></DownupToggle>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.9375rem",
            }}
          >
            투명도
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "0.1875rem",
            border: "1px solid #E9E9E9",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            borderWidth: "1px",
            paddingX: "0.75rem",
          }}
        >
          {opacityValue} %
        </Box>
      </Box>

      <Collapse in={expand}>
        <Box>
          <Slider
            value={typeof opacityValue === "number" ? opacityValue : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            style={{ color: "#7E73FE", width: "100%" }}
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Opacity;
