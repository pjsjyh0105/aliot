import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FilterOpacity from "./FilterOpacity";
import { WorldBackgroundData } from "../../../../../Drawer/state";
import { RecoilState, useRecoilState } from "recoil";
const SelfFilter = () => {
  const [worldData, setWorldData] = useRecoilState(WorldBackgroundData);
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [invert, setInvert] = useState(0);
  const [saturate, setSaturate] = useState(100);
  const [sepia, setSepia] = useState(0);

  useEffect(() => {
    setWorldData((prevWorldData) => ({
      ...prevWorldData,
      filter: `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${invert}%) saturate(${saturate}%) sepia(${sepia}%)`,
    }));
  }, [blur, brightness, contrast, grayscale, invert, saturate, sepia]);

  return (
    <Box>
      <Box>
        <Typography>흐림</Typography>
        <FilterOpacity
          start={0}
          end={20}
          middle={0}
          setFilter={setBlur}
        ></FilterOpacity>
      </Box>
      <Box>
        <Typography>밝기</Typography>
        <FilterOpacity
          start={0}
          end={200}
          middle={100}
          setFilter={setBrightness}
        ></FilterOpacity>
      </Box>
      <Box>
        <Typography>대비</Typography>
        <FilterOpacity
          start={0}
          end={200}
          middle={100}
          setFilter={setContrast}
        ></FilterOpacity>
      </Box>
      <Box>
        <Typography>흑백</Typography>
        <FilterOpacity
          start={0}
          end={100}
          middle={0}
          setFilter={setGrayscale}
        ></FilterOpacity>
      </Box>
      <Box>
        <Typography>반전</Typography>
        <FilterOpacity
          start={0}
          end={100}
          middle={0}
          setFilter={setInvert}
        ></FilterOpacity>
      </Box>
      <Box>
        <Typography>채도</Typography>
        <FilterOpacity
          start={0}
          end={200}
          middle={100}
          setFilter={setSaturate}
        ></FilterOpacity>
      </Box>
      <Box>
        <Typography>세피아</Typography>
        <FilterOpacity
          start={0}
          end={100}
          middle={0}
          setFilter={setSepia}
        ></FilterOpacity>
      </Box>
    </Box>
  );
};

export default SelfFilter;
